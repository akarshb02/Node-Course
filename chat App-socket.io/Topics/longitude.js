const socket = io();

document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input').value
    socket.emit('message', input, (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Msg delivered');
    });
})

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('this APi is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {


        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("latitude of current location is " + lat);
        console.log("longitude of given location is " + lon);

        socket.emit('sendLocation', {
            lat,
            lon
        })
    })
});
