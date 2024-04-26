'use strict';

const os = require('os');
const path = require('path');
const nodeStatic = require('node-static');
const https = require('https');
const fs = require('fs');
const { Server } = require('socket.io');

// Define paths
const keyPath = path.join(__dirname, '../server.key');
const certPath = path.join(__dirname, '../server.crt');
const publicPath = path.join(__dirname, 'public');

const fileServer = new(nodeStatic.Server)(publicPath);

// Read SSL certificate files
const options = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath),
}

const httpsServer = https.createServer(options, function(req, res) {
  fileServer.serve(req, res);
})
httpsServer.listen(8000);

const io = new Server(httpsServer);
io.sockets.on('connection', function(socket) {

  // convenience function to log server messages on the client
  function log() {
    var array = ['Message from server:'];
    array.push.apply(array, arguments);
    socket.emit('log', array);
  }

  socket.on('message', function(message) {
    log('Client said: ', message);
    console.log(message)
    // for a real app, would be room-only (not broadcast)
    socket.broadcast.emit('message', message);
  });

  socket.on('create or join', function(room) {
    log('Received request to create or join room ' + room);

    console.log('Received request to join room ' + room);

    var clientsInRoom = io.sockets.adapter.rooms[room];
    var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;
    log('Room ' + room + ' now has ' + numClients + ' client(s)');

    if (numClients === 0) {
      socket.join(room);
      log('Client ID ' + socket.id + ' created room ' + room);
      socket.emit('created', room, socket.id);

    } else if (numClients === 1) {
      log('Client ID ' + socket.id + ' joined room ' + room);
      io.sockets.in(room).emit('join', room);
      socket.join(room);
      socket.emit('joined', room, socket.id);
      io.sockets.in(room).emit('ready');
    } else { // max two clients
      socket.emit('full', room);
    }
  });

  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });

  socket.on('bye', function(){
    console.log('received bye');
  });

});
