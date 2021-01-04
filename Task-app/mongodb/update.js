//CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const odbjectId = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')



const id = ObjectID();

console.log(id);


const conncetURL = 'mongodb://127.0.0.1:27017'

const database = 'task-manager'

MongoClient.connect(conncetURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('unable to connect');
    }
    console.log('Connected correctly');


    const db = client.db(database);

    // db.collection('users').insertOne({
    //     name: 'xyz',
    //     age: 20
    // })

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

    db.collection('tasks').findOne({ name: 'xtw' }, (err, result) => {
        if (err) {
            return console.log(err);
        } else {
            return console.log(result);
        }
    })

    db.collection('tasks').find({ name: "xyz" }).toArray((error, result) => {

        if (error) {
            console.log(error);
        } else {
            console.log(result);
        }

    })




    ///updating doc
    db.collection('users').updateOne({
        _id: new ObjectID("5fef242fa134590450ba3196")
    }, {
        $set: {
            name: 'Akarsh'
        },
        $inc: {
            age: +1

        }

    }).then((result) => {

        console.log(result);

    }).catch((error) => {
        console.log(error);
    })
    db.collection('users').deleteMany({
        name: 'xyz'

    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })


    db.collection('users').deleteOne({
        _id: ObjectID("5fef242fa134590450ba3196")

    }, {

        age: 25

    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})
