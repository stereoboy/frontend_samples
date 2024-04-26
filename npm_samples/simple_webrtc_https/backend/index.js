const { createServer } = require('https');
const fs = require('fs');
const path = require('path');
const { Server } = require('socket.io');
const express = require('express');


// Define paths
const keyPath = path.join(__dirname, '../server.key');
const certPath = path.join(__dirname, '../server.crt');

// Create an Express app
const app = express();

// Read SSL certificate files
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
};

// Create an HTTPS server
const httpServer = createServer(options, app);

const io = new Server(httpServer, {
    cors: {
        origin: "https://0.0.0.0:8080",
    },
});

const port = 5000
httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});