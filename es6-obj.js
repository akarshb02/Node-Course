//object property shorthand

const name = "xyz"
const userage = 20


const user = {

    // name :name                 *   assigining obj values
    name, // shorthand obj
    userage,
    location: "Bangalore"
}

console.log(user);



//obj destructuring

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const { label: productlabel, stock } = product
// console.log(productlabel);
// console.log(stock);

//destructuring when we are working with functions


const tran = (type, { label, price, stock }) => {

    console.log(type, label, price, stock);

}
tran("order", product);
