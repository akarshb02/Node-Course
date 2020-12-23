setTimeout(() => {

    console.log("2 sec");

}, 2000)

const names = ['Andr', "xyz", "www"]
const shortNamers = names.filter((name) => {
    return name.length <= 4
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            langitude: 0
        }
        callback(data);

    }, 3000);

}

const data = geocode("bangalore", (content) => {

    console.log(content);
});


//challenge
const add = (a, b, sum) => {

    setTimeout(() => {
        console.log("Two sec");

        sum(a + b)
    }, 2000)



}
const neww = add(1, 4, (val) => {
    console.log(val);
})
