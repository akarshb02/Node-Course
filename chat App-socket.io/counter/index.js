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

//server (emit)  =>client(receive) -countUpdate
//client (emit) => server (receive) -incement

 let count = 0;
 io.on('connection', (socket) => {
     console.log('New web connection');
    
    socket.emit("countupdated", count); //to send an event 

     socket.on('increment', () => {
         count++;
//         //socket.emit('countupdated', count); //updated result from bitton & for single connection

         io.emit('countupdated', count); //for multiple connections update

     })

 })
