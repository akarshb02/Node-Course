// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const odbjectId = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')        //destructuring



const id = ObjectID();

console.log(id);


const conncetURL = 'mongodb://127.0.0.1:27017'

const database = 'task-manager'

MongoClient.connect(conncetURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('unable to connect');
    }
    console.log('Connected correctly');
    db.collection('tasks').insertMany([{
            _id: id, //setting id
            name: 'xtw',
            age: '22'
        },
        {
            name: "xyz",
            age: "10"
        }
    ])
})
