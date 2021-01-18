const { calTip, celsiusToFahrenheit, fahrenheitToCelsius, add } = require('../math')
    // test("Hello worls", () => {

// })

// test("this should fail", () => {

//     throw  new Error('Failure');

// })

// test('calculateTip', () => {
//     const total = calTip(2, 3);
//     expect(total).toBe(8);
// })

test('Should convert 32 F to 0 C', () => {
    const temp = fahrenheitToCelsius(32);
    expect(temp).toBe(0);
})
test('Should convert 0 F to 32 C', () => {
    const temp = celsiusToFahrenheit(0);
    expect(temp).toBe(32);
})

test('Async test demo', (done) => {
    setTimeout(() => {

        expect(1).toBe(2);
        done();
    }, 3000)

})

test("adding two numbers", (done) => {
    add(2, 3).then((sum) => {
        expect((sum).toBe(6));
    })
})
test('adding two numbers', async() => {
    const sum = await add(2, 3)

    expect(sum).toBe(5);


})
