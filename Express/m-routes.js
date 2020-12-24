const express = require("express")
const app = express()

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


app.listen(30, () => {

    console.log("Server started");
})
