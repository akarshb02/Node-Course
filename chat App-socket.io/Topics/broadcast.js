
io.on('connection', (socket) => {

    console.log("New connection established");
    socket.emit('message', "Welcome");
    socket.broadcast.emit("message", 'A new user joined....!');


    socket.on("message", (message) => {
        io.emit('message', message);
    })

    socket.on('disconnect', () => {
        io.emit("message", "A user has left..!");
    })

});
