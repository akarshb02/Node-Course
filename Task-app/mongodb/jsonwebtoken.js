const jwt = require('jsonwebtoken')

const myFun = async() => {
    const token = jwt.sign({ _id: "abs" }, "this is a token")
    console.log(token);

    const verify = jwt.verify(token, "this is a token")
    console.log(verify);
}
myFun()
