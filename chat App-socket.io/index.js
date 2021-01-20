const path = require('path')
const http = require('http')
const express = require('express')
const app = express();
const socketio = require('socket.io')
const server = http.createServer(app)

const io = socketio(server)


const port = process.env.PORT || 30
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir))


io.on('connection', () => {
    console.log('New web connection');
})

server.listen(port, () => {
    console.log(`server started at ${port}!`);
})
