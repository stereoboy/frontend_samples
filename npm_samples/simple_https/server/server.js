// server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Define paths
const keyPath = path.join(__dirname, 'server.key');
const certPath = path.join(__dirname, 'server.crt');

// Read SSL certificate files
const options = {
    // key: fs.readFileSync(keyPath),
    // cert: fs.readFileSync(certPath),
}

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, HTTPS World!');
});

// Create HTTPS server
const server = https.createServer(options, app);

// Start the server
const port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});