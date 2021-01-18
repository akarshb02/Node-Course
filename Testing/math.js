const calTip = (total, tipPercent) => {
    const tip = total * tipPercent;
    return total + tip;
}

const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32
}
const add = (a, b) => {
    return new Promise((res, reject) => {

        setTimeout(() => {

            res(a + b)

        }, 2000)
    })
}

module.exports = {
    calTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}
