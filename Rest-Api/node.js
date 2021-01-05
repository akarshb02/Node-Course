require('./db/mongoose');
const User = require('./module/user')
const Task = require('./module/task')
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


app.use(express.json())

app.post('/user', (req, res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        console.log(user);
    }).catch((error) => {
        res.status(400).send(error)

    })
})

app.get('/user', (req, res) => {
    User.find({}).then((value) => {
        res.send(value);
    }).catch((e) => {
        console.log(e);
    })

})
app.get('/user/:id', (req, res) => {

    const _id = req.params.id;
    User.findById(_id).then((task) => {
        return res.send(task)
    }).catch((e) => {
        console.log(e);
    })

})

app.post('/tasks', (req, res) => {
    const task1 = new Task(req.body);

    task1.save().then(() => {
        res.send(task1)
    }).catch((error) => {
        res.status(400).send(error)
    })
})




app.listen(port, () => {
    console.log("server started at port " + port);
})
