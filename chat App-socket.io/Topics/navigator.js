const socket = io();


socket.on('message', (message) => {

    console.log(message);

})
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = e.target.elements.inputdata.value
    socket.emit('message', input);
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('this api is not supported');
    }
    navigator.geolocation.getCurrentPosition.apply((position) => {
        console.log(position);
    })
})
