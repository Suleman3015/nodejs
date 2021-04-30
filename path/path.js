let path = require("path")

// console.log(path.dirname("/home/mani/node.js series/path/path.js"))
console.log(path.extname("/home/mani/node.js series/path/path.js"))
console.log(path.basename("/home/mani/node.js series/path/path.js"))
const myPath = path.parse("/home/mani/node.js series/path/path.js")
console.log(myPath.ext)