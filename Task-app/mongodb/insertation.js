//CRUD create read update delete
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const conncetURL = 'mongodb://127.0.0.1:27017'

const database = 'task-manager'

MongoClient.connect(conncetURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('unable to connect');
    }
    console.log('Connected correctly');


    const db = client.db(database);

    //     db.collection('users').insertOne({
    //         name: 'xyz',
    //         age: 20
    //     })

    db.collection('tasks').insertMany([{
            name: 'xtw',
            age: '22'
        },
        {
            name: "xyz",
            age: "10"
        }
    ])
})
