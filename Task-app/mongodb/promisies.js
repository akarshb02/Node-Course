const dopromises = new Promise((response, reject) => {

    setTimeout(() => {
        response([1, 2, 3])
        reject("Thing went wrong")

    }, 2000)


})


dopromises.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log('Error', error);
})
