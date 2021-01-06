onst bcrypt = require('bcrypt')

const myfun = async() => {
    const mypas = "xyz@111"
    const hash = await bcrypt.hash(mypas, 8)

    console.log(mypas);
    console.log(hash);

    const isMatch = await bcrypt.compare(mypas, hash)
    console.log(isMatch);
}
myfun()
