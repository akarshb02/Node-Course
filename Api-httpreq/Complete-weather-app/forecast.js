const req = require("request")
const chal = require("chalk")
const forecast = (address, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=81aaab3f77b099065ec25f40991d63bf&query=" + address
    req({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect");
        } else if (body.error) {
            callback("unable to find ")

        } else {
            langitude = body.current.temperature;
            latitude = body.current.feelslike;
            callback(body.current.weather_descriptions + ". It is currently " + langitude + " degrees out. " + "It feels like " + latitude + " degree out.");

        }
    })
}





exports.forecast = forecast;
