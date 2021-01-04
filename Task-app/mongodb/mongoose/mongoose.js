const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


const User = mongoose.model('user', {
    name: {
        type: String
    },
    age: {
        type: Number,
      }
      })

const user1 = new User({
    name: 'bbb',
    age: -1
})
user1.save().then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

const Task = mongoose.model("tasks", {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const tasks = new Task({
    description: "this is 1st des",
    completed: true
})

tasks.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})
