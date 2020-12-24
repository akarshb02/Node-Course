 const req = require("request");
 const { forecast } = require("./utils/forecast")
 const { geocode } = require("./utils/geocode");
 
 
 const addr = process.argv[2];
 if (!addr) {
     console.log("Please provide address");
 } else {
     geocode(addr, (error, { location }) => {
         if (error) {
             return console.log(error);
         }

         forecast(addr, (error, foredata) => {
             if (error) {
                 return console.log(error);


             }
             console.log(location);
             console.log(foredata);
         })
     })
 }
