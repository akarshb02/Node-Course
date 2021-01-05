require('./src/db/mongoose')
const User = require('./src/module/user')

const Task = require('./src/module/task')


User.findByIdAndUpdate('5ff2eff3a3fa9a068327c9b1', { age: 22 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 22 })
}).then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
})

Task.findOneAndDelete('5ff441a272d03d0a4e4850a7').then((val) => {

    console.log("successfully deleted" + val)
    return Task.countDocuments({ complete: true })


}).catch((error) => {

    console.log(error);
})
