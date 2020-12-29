console.log("this is client side js");


const weatherForm = document.querySelector('form');
const inputData = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageSec = document.querySelector('#message-2')

//messageOne.textContent = "finder"


weatherForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const location = inputData.value
    messageOne.textContent = 'Loading...'
    messageSec.textContent = ' '


    fetch('http://localhost:800/weather/?address=' + location).then((res) => {

        res.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error

            } else
                messageOne.textContent = data.location
            messageSec.textContent = data.forecast
        })

    })
})
