const socket = io();


socket.on('message', (message) => {

    console.log(message);

})
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value
    socket.emit('message', input);
})
