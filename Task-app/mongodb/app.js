const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const conncetURL = 'mongodb://127.0.0.1:27017'

const database = 'task-manager'

MongoClient.connect(conncetURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log('unable to connect');
    }
    console.log('Connected correctly');

})
