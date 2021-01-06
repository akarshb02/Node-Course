require('./db/mongoose');
const User = require('./module/user')
const Task = require('./module/task')
const express = require('express');
const app = express();
const taskRout = require("./routers/task")
const router = require("../src/routers/users")

const port = process.env.PORT || 100;
app.use(express.json())
app.use(router)
app.use(taskRout)

app.listen(port, () => {
    console.log("server started at port " + port);
})

