const { request } = require("http");
const http = require("http")


const url = "http://api.weatherstack.com/current?access_key=81aaab3f77b099065ec25f40991d63bf&query=bangalore";

const req = http.request(url, (response) => {

   

    response.on('data', (chunk) => { //register a handler

        const content = chunk;

        const to = content.toString();
        const stri = JSON.parse(to)

        console.log(stri.location);

    })

    response.on('end', () => { //WHEN FETCHING DATA IS OVER



    })

})
req.end();
