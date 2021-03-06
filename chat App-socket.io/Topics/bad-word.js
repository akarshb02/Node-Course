const path = require('path')
const http = require('http')
const express = require('express')
const app = express();
const socketio = require('socket.io');
const { Socket } = require('dgram');
const server = http.createServer(app)
const filter = require('bad-words')

const io = socketio(server)

const port = process.env.PORT || 32
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))

io.on('connection', (socket) => {

    console.log("New connection established");
    socket.emit('message', "Welcome");


    socket.on("message", (message, callback) => {
        const filt = new filter();

        if (filt.isProfane(message)) {
            return callback('profane is not allowed');
        }

        io.emit('message', message);
        callback();
    })

    socket.on('sendLocation', (cords) => {
        io.emit('message', `https://google.com/maps?q=${cords.lat },${cords.lon}`);
    })

});
server.listen(port, () => {
    console.log(`server started at ${port}!`);
})
