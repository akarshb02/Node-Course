const path = require("path")
const express = require("express")
const hbs = require('hbs')
const app = express()

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

app.get('/app/weather', (req, res) => {

    res.send("<h1>comminp soon !</h1>")

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


app.listen(650, () => {

    console.log("Server started");
})
