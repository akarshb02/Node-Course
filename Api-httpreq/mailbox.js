const req = require("request");
 const { geocode } = require("./utils/geocode");
 const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/bangalore.json?access_token=pk.eyJ1IjoiYWthcnNoMTIzIiwiYSI6ImNraXp6amwxMDJ6b2MydGxyNDlzbWxia3MifQ.cNC-9AKOFIrDvSOpSg8zyw"



 req({ url, json: true }, (err, res) => {

     if (err) {
         console.log("Something went wrong ");

     } else if (res.body.err) {
         console.log("Unable to find location");
     } else {

         const type = res.body.features[0].center;
         console.log(type);


     }

 });
