const express = require("express")
const app = express()

app.get("/app", (req, res) => {
    res.send("Hello");

})

app.listen(30, () => {

    console.log("Server started");
})
