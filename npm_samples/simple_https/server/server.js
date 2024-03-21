// server.js
const app = require('express')();
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('/home/rofox/work/frontend_samples/npm_samples/simple_https/server/server.key'), // replace it with your key path
    cert: fs.readFileSync('/home/rofox/work/frontend_samples/npm_samples/simple_https/server/server.crt'), // replace it with your certificate path
}

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('Hello, HTTPS World!');
}).listen(5000, () => {
  console.log('Server is running on port 5000');
});