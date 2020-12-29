const path = require("path")
const express = require("express")
const hbs = require('hbs')

const { request } = require("http")
const app = express()
const { geocode } = require('../utils/geocode')
const { forecast } = require('../utils/forecast')

// const temp = 28;
// const feel_like = "vwr"

console.log(geocode);
console.log(forecast);


const custPath = path.join(__dirname, "../templates")
const partialspath = path.join(__dirname, "../templates/partials")

const pathstatic = path.join(__dirname, '../public');

app.use(express.static(pathstatic))

app.set('view engine', 'hbs')
app.set('views', custPath);

hbs.registerPartials(partialspath)




app.get('/', (req, res) => {
    res.render("index", {
        title: 'Weather',
        name: "Akarsh",

    })
})

app.get("/app", (req, res) => {
    res.send("Hello");

})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'must provide endpoint address'
        })
    }
    geocode(req.query.address, (error, { location } = {}) => {

        if (error) {
            return res.send({ error })
        }

        forecast(location, (dod, error) => {

            if (error) {
                return res.send({ error })
            } else {

                res.send({
                    forecast: dod,
                    location,
                    address: req.query.address

                })
            }

        })


        // })



    })

    // console.log(req.query.address);

    // res.send({
    //     forecast: 'It is snowing',
    //     location: req.query.address,
    //     address: req.query.address

    // })

})

app.get('/product', (req, res) => {

    if (!req.query.search) {
        return res.send({
            error: 'You must provide search'
        })
    }
    console.log(req.query.search);
    res.send({
        products: []
    })

})

app.get('/help', (req, res) => {
    res.send({
        name: 'xyz',
        age: 20
    })
})
app.get("/array", (req, res) => {
    res.send([{
            name: "zzz"
        },
        {
            name: "yyy"
        }

    ])
})

app.get('/help/*', (req, res) => {

    res.render("404", {
        title: "404",
        errorMessage: "Help article not found"
    })
})


app.get("*", (req, res) => {

    res.render("404", {
        title: "404",
        errorMessage: "Page not found"
    })
})


app.listen(800, () => {

    console.log("Server started");
})
