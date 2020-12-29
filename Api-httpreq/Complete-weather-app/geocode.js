//callback abstraction 

const req = require("request")
const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json?access_token=pk.eyJ1IjoiYWthcnNoMTIzIiwiYSI6ImNraXp6amwxMDJ6b2MydGxyNDlzbWxia3MifQ.cNC-9AKOFIrDvSOpSg8zyw";

    req({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("unable to connect");
        } else if (body.features.length === 0) {
            callback("unable to find Location")

        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                langitude: body.features[1].center[1],
                location: body.features[0].place_name





            })
        }
    })

}


exports.geocode = geocode;
