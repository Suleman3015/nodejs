
const add = (a, b) => {
    return a + b

}

const sub = (a, b) => {
    return a - b
}


const mul = (a, b) => {
    return a * b
}

let happy = "welcome to node js"

// module.exports.add = add
// module.exports.sub = sub
// module.exports.mul = mul

module.exports = { add, sub, mul, happy }