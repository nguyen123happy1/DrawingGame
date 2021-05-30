const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {                    //Link to html file
    res.sendFile(__dirname + '/PlayingScreen.html');
});

io.on('connection', (socket) => {

    // Check user login/logout
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Print messages
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });
    
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});