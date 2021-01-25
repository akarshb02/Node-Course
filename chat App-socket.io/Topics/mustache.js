const socket = io();

const messageForm = document.querySelector('#form')
const messageInput = messageForm.querySelector('#inputt')
const messageButton = messageForm.querySelector('button')
const renderMessage = document.querySelector('#messages')
const locationBtn = document.querySelector('#send-location')


//Templets

const messageTemplet = document.querySelector('#message-templete').innerHTML
const msgLoc = document.querySelector('#message-Location')



socket.on('message', (message) => {

    console.log(message);


    const html_Temp = Mustache.render(messageTemplet, {
        message
    });
    renderMessage.insertAdjacentHTML('beforeend', html_Temp);
})

socket.emit('messageLoc', (url) => {
    console.log(url);
    const html = Mustache.render(msgLoc, {
        url
    })
    renderMessage.insertAdjacentHTML('beforeend', html);
})


messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.elements.inputdata.value
    messageButton.setAttribute('disabled', 'disabled');
    socket.emit('message', message, (error) => {

        messageButton.removeAttribute('disabled')
        messageInput.value = ' '
        messageInput.focus()

        if (error) {
            console.log(error);
        }
        console.log('Msg delivered');


    });
})

locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('this APi is not supported');
    }

    locationBtn.setAttribute('disabled', 'disabled');

    navigator.geolocation.getCurrentPosition((position) => {


        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("latitude of current location is " + lat);
        console.log("longitude of given location is " + lon);

        socket.emit('sendLocation', {
            lat,
            lon
        })
        locationBtn.removeAttribute('disabled');
    })
});
