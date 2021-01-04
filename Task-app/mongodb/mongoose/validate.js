const mongoose = require('mongoose');
const validate = require('validate')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api');


const User = mongoose.model('user', {
    name: {
        type: String
    },
    age: {
        type: Number,
        validate(value) {

            if (value < 0) {
                throw new Error('age must be positive value')
            }
        }
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

