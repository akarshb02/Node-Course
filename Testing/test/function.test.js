const { TestScheduler } = require("jest");


//tesing function
const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit, add } = require('../src/function-test')

test("should calculate tip", () => {

    const cal = calculateTip(10, 0.3);
    expect(cal).toBe(13);
    // if (cal !== 13) {
    //     throw new Error("total tip should be 13 but you got " + cal);
    // }
})

test("should take default tip value", () => {
    const defaultTip = calculateTip(10);
    expect(defaultTip).toBe(12);
})

test("Should convert 32 F to 0 C", () => {
    const convert = fahrenheitToCelsius(32)
    expect(convert).toBe(0);
})

test("Should convert 0 C to 32 F ", () => {
    const convert = celsiusToFahrenheit(0);
    expect(convert).toBe(32);
})

test("Async code", (done) => { //while  testing async code  we have to add done so jest will get its an async code
    setTimeout(() => {

        expect(1).toBe(2);
        done()

    }, 3000)


})
test("Async-Await", async() => {
    const sum = await add(22, 10);
    expect(sum).toBe(32);

})



test("testing", () => {
    console.log("Hello World");
})

test("this test should fail", () => {
    throw new Error("failed");
})
