const socket = io();
socket.on('message', (message) => {
      console.log(message);

})

socket.on("countupdated", (count) => { //to receive the event from server
    console.log("count is updated", count);

})

document.querySelector('#button').addEventListener("click", () => {
    console.log("clicked");
    socket.emit("increment", )
});
