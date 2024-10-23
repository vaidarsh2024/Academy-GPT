import  { useRef, useState } from 'react';
import { TranscribeClient, StartTranscriptionJobCommand, GetTranscriptionJobCommand } from '@aws-sdk/client-transcribe';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faStop } from '@fortawesome/free-solid-svg-icons';

const AudioTranscriber = ({ onTranscription }) => {
    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const [error, setError] = useState(null);
    const [jobName, setJobName] = useState('');
    let audioKey = useRef(null);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.start();

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        };

        setRecording(true);
    };

    const stopRecording = async () => {
        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            await uploadAudio(audioBlob);
            audioChunksRef.current = []; // Clear chunks for next recording
        };
        setRecording(false);
    };

    const uploadAudio = async (audioBlob) => {
        const s3Url = await uploadToS3(audioBlob); 
        await startTranscriptionJob(s3Url);
    };

    const startTranscriptionJob = async (s3Url) => {
        const client = new TranscribeClient({
            region: 'us-east-1',
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
            },
        });

        const jobName = `transcription-${Date.now()}`;
        setJobName(jobName); // Set job name for later retrieval

        const command = new StartTranscriptionJobCommand({
            TranscriptionJobName: jobName,
            LanguageCode: 'en-US',
            Media: {
                MediaFileUri: s3Url,
            },
            Settings: {
                LanguageIdSettings: { 
                    'en-US': {}, // English
                    'tr-TR': {}, // Turkish
                },
                IdentifyLanguage: true,
            },
            OutputBucketName: 'simextranscribe'
        });

        try {
            await client.send(command);
            waitForTranscription(jobName);
        } catch (error) {
            console.error('Error starting transcription job:', error);
        }
    };

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            return jsonData
        } catch (error) {
            setError(error.message);
        }
    };

    const waitForTranscription = async (jobName) => {
        const client = new TranscribeClient({
            region: 'us-east-1',
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
            },
        });

        const command = new GetTranscriptionJobCommand({
            TranscriptionJobName: jobName,
        });

        try {
            let response;
            do {
                response = await client.send(command);
                if (response.TranscriptionJob.TranscriptionJobStatus === 'COMPLETED') {
                    const transcriptionResult = await fetchData(response.TranscriptionJob.Transcript.TranscriptFileUri);
                    if (transcriptionResult.results && transcriptionResult.results.transcripts.length > 0) {
                        const transcription = transcriptionResult.results.transcripts[0].transcript;
                        deleteS3(audioKey);
                        deleteS3(jobName+'.json');
                        onTranscription(transcription);
                    }
                    break;
                } else if (response.TranscriptionJob.TranscriptionJobStatus === 'FAILED') {
                    console.error('Transcription job failed');
                    break;
                }
                await new Promise(res => setTimeout(res, 5000));
            } while (true);
        } catch (error) {
            console.error('Error getting transcription job:', error);
        }
    };

    const deleteS3 = async (key) => {
        const s3Client = new S3Client({
            region: 'us-east-1',
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
            },
        });
    
        const params = {
            Bucket: 'simextranscribe',
            Key: key,
        };
    
        try {
            await s3Client.send(new DeleteObjectCommand(params));
        } catch (error) {
            console.error(`Error deleting object: ${error.message}`);
        }
    }

    const uploadToS3 = async (audioBlob) => {
        const s3Client = new S3Client({
            region: 'us-east-1',
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_KEY,
            },
        });

        audioKey = `audio/${Date.now()}.wav`;
    
        const params = {
            Bucket: 'simextranscribe',
            Key: audioKey,
            Body: audioBlob,
            ContentType: 'audio/wav',
        };
    
        try {
            await s3Client.send(new PutObjectCommand(params));
            return `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`;
        } catch (error) {
            console.error('Error uploading audio to S3:', error);
        }
    };

    return (
        <span style={{position: 'absolute', bottom: '20px', right: '20px', zIndex: '1000'}}>
            <FontAwesomeIcon 
                icon={recording ? faStop : faMicrophone} 
                size="3x" 
                onClick={recording ? stopRecording : startRecording} 
                style={{ cursor: 'pointer', color: recording ? 'red' : '#000' }} 
            />
        </span>
    );
};

export default AudioTranscriber;