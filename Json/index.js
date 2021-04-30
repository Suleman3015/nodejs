const { Console } = require("console")
const fs = require("fs")
const data = {
    name: "mani",
    class: "12",
    coure: "ai",
}

const jsonData = JSON.stringify(data)
fs.writeFile("maan.json", jsonData, (err) => {
    console.log("done")

})

fs.readFile("./maan.json", "utf-8", (err, Data) => {
    console.log(Data)
    const newData = JSON.parse(Data)
    console.log(newData)
})

