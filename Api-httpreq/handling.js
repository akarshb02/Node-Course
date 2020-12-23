const req = require("request")
const chal = require("chalk")


const url = "http://api.weatherstack.com/current?access_key=81aaab3f77b099065ec25f40991d63bf&query"

req({ url: url, json: true }, (error, res) => {


    if (error) {
        console.log("Something went wrong");

    } else if (res.body.error) {
        console.log("Unable to connect");
    } else {

        const temp = res.body.current.temperature;
        const feel_like = res.body.current.feelslike;
        console.log(res.body.current.weather_descriptions + ". It is currently " + chal.red.bold(temp) + " degrees out. " + "It feels like " + chal.green.bold.inverse(feel_like) + " degree out.");

    }
})
