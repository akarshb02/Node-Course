const add = (a, b) => {
    return new Promise((res, reject) => {

        setTimeout(() => {

            res(a + b)

        }, 2000)
    })
}


add(1, 2).then((sum) => {
    console.log(sum)

    add(sum, 2).then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })

}).catch((e) => {
    console.log(e);
})
