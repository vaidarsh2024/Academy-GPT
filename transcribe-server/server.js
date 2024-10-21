const express = require('express');
const AWS = require('aws-sdk');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = 3001;

app.use(cors());

// Configure AWS SDK
AWS.config.update({
    region: 'us-east-1', // Change to your region
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// Function to create a pre-signed WebSocket URL
const createPresignedWebSocketUrl = (region, accessKeyId, secretAccessKey) => {
    const service = 'transcribe';
    const endpoint = `transcribestreaming.${region}.amazonaws.com`;
    const method = 'GET';
    const path = '/stream-transcription'; // Adjust this path as needed

    const date = new Date();
    const amzDate = date.toISOString().replace(/[:-]|\.\d{3}/g, '');
    const datestamp = amzDate.substr(0, 8);

    const canonicalHeaders = `host:${endpoint}\n`;
    const signedHeaders = 'host';
    
    // Create the canonical request
    const canonicalRequest = `${method}\n${path}\n\n${canonicalHeaders}\n${signedHeaders}\nUNSIGNED-PAYLOAD`;
    
    // Create the string to sign
    const credentialScope = `${datestamp}/${region}/${service}/aws4_request`;
    const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${crypto.createHash('sha256').update(canonicalRequest).digest('hex')}`;
    
    // Calculate the signature
    const signingKey = crypto.createHmac('sha256', `AWS4${secretAccessKey}`)
        .update(datestamp)
        .update(region)
        .update(service)
        .update('aws4_request')
        .digest();
    
    const signature = crypto.createHmac('sha256', signingKey).update(stringToSign).digest('hex');

    // Construct the pre-signed URL
    const url = `wss://${endpoint}${path}?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=${accessKeyId}/${credentialScope}&X-Amz-Date=${amzDate}&X-Amz-Signature=${signature}`;

    return url;
};

// Endpoint to get the WebSocket URL
app.get('/get-websocket-url', (req, res) => {
    try {
        const url = createPresignedWebSocketUrl('us-east-1', process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);
        res.json({ url });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating WebSocket URL');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});