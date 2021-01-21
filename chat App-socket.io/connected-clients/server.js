const path = require('path')
const http = require('http')
const express = require('express')
const app = express();
const socketio = require('socket.io');
const { Socket } = require('dgram');
const server = http.createServer(app)

const io = socketio(server)

const port = process.env.PORT || 31
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

io.on('connection', (socket) => {

    console.log("New connection established");
    socket.emit('message', "Welcome");


    socket.on("message", (message) => {
        io.emit('message', message);
    })

});
server.listen(port, () => {
    console.log(`server started at ${port}!`);
})
