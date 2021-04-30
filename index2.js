let fs = require("fs")

// let myFile = fs.writeFileSync("read.txt", "hello this is mani")
// console.log(myFile)

// is you again use this method like => myFile = fs.writeFileSync("read.txt", "hello this is mani bhai jaan") 
// so the first data will be overwrite

// myFile = fs.writeFileSync("read.txt", "hello this is mani bhai jaan")
// console.log(myFile)

// how to read a file in node.js sync method

let data = fs.readFileSync("read.txt").toString()
console.log(data)