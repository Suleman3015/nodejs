let fs = require('fs')

// fs.writeFile("./read.txt", "hello mani", (err) => {
//     console.log("task completed")
// })

fs.appendFile("./read.txt", " good morning", (err) => {
    console.log("task completed")
})

fs.readFile("./read.txt", "UTF-8", (err, data) => {
    console.log(data)
})