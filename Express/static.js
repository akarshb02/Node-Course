const path = require("path")
const express = require("express")
const app = express()

console.log(__dirname);
const pathstatic = path.join(__dirname, '../public');

app.use(express.static(pathstatic))

app.listen(30, () => {

    console.log("Server started");
})
