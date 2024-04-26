// server.js
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Define paths
const keyPath = path.join(__dirname, '../server.key');
const certPath = path.join(__dirname, '../server.crt');
const publicPath = path.join(__dirname, 'public');

// Read SSL certificate files
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
}

// Use static file server
app.use(express.static(publicPath));

// Create HTTPS server
const server = https.createServer(options, app);

// Start the server
const port = 8080;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});