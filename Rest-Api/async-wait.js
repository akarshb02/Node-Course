const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}


const dowork = async() => {
    // throw new Error('Something went wrong')
    // return 'Akarsh'
    const sum = await add(1, 99)
    const sum1 = await add(sum, 50)
    const sum2 = await add(sum1, 3)
    return sum2
}
dowork().then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log('e', e);
})
