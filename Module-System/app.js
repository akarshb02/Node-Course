//const s = require("./another.js")
const validator = require("validator")
const getNotes = require("./data.js")
const chal = require('chalk')
// const fs = require('fs')
// fs.writeFileSync("notes.txt", "This file was created by Node.js")
// fs.appendFileSync('notes.txt', " Appended new")
const m = "xyz@gmail.com";
//const name = 'XYZ';
console.log(chal.green.bold("SUCCESS"));
console.log(validator.isEmail(m));
const msg = getNotes
console.log((msg));
//const sum = s(4, -3);
// console.log(sum);
const data = process.argv[3];
console.log(data);
// console.log(s);
// const arg = chal.blue.bold(data)

if (data === "add") {
    console.log("Adding note!");
} else {
    console.log("Try Again!");
}
