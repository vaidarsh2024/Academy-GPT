import  { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faStop } from "@fortawesome/free-solid-svg-icons";


const AudioRecorder = () => {
    const [recording, setRecording] = useState(false);
    const [transcription, setTranscription] = useState('');
    const mediaRecorderRef = useRef(null);
    const wsRef = useRef(null);

    const getWebSocketUrl = async () => {
        const response = await fetch(
          "https://academy-gpt-1.onrender.com/get-websocket-url"
        );
        if (!response.ok) {
            throw new Error('Failed to fetch WebSocket URL');
        }
        const data = await response.json();
        return data.url;
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.start();

            mediaRecorderRef.current.ondataavailable = async (event) => {
                if (event.data.size > 0) {
                    await sendAudioChunk(event.data);
                }
            };

            setRecording(true);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
        }
        setRecording(false);
    };

    const sendAudioChunk = async (audioBlob) => {
        if (!wsRef.current) {
            try {
                const wsUrl = await getWebSocketUrl(); // Get the pre-signed URL
                wsRef.current = new WebSocket(wsUrl);

                wsRef.current.onopen = () => {
                    console.log('WebSocket connection opened');
                };

                wsRef.current.onmessage = (event) => {
                    const transcriptionResult = JSON.parse(event.data);
                    console.log('Transcription:', transcriptionResult);
                    if (transcriptionResult.Transcript.Results.length > 0) {
                        setTranscription(transcriptionResult.Transcript.Results[0].Alternatives[0].Transcript);
                    }
                };

                wsRef.current.onerror = (error) => {
                    console.error('WebSocket error:', error);
                };

                wsRef.current.onclose = () => {
                    console.log('WebSocket connection closed');
                };
            } catch (error) {
                console.error('Error connecting to WebSocket:', error);
                return;
            }
        }

        // Read audio blob and send it through WebSocket
        const reader = new FileReader();
        reader.onloadend = () => {
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(reader.result); // Send audio chunk as ArrayBuffer
            } else {
                console.error("WebSocket is not open. Cannot send audio chunk.");
            }
        };
        
        reader.readAsArrayBuffer(audioBlob);
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

export default AudioRecorder;