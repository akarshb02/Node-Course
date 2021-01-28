const request = require('supertest')
const user = require('../src/app')
const User = require('../src/module/user')
const jwt = require('jsonwebtoken')
const mongoose = require("mongoose")

const id = new mongoose.Types.ObjectId;

const userOne = ({
    id = userOneId,
    name: "abc",
    email: "abc@gmail.com",
    password: "abc@123"
})

//jest setup & teardown

beforeEach(async() => {
    await User.deleteMany(),
        await new User(userOne).save();
})

// afterEach(() => {
//     console.log("After Each");
// })


test("should test new user", async() => {
    await request(user).post('/user').send({
        name: "akarsh",
        email: "akarsg226@gmail.com",
        password: "mylogin@123"
    }).expect(201)
})
test("should login existing user", async() => {
    await request(app).post('user/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

})
test('should upload avatar image ', async() => {
    await request(app)
        .post('user/me/avatar')
        .set("Authorization", `bearer ${userOne.jwd[0].jwt}`)
        .attach('avatar', 'tests/fixtures/robot.png')
        .expect(200)
})
