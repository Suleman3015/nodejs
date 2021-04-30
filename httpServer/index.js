const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {

    const data = fs.readFileSync(`${__dirname}/api/api.json`, "utf-8")
    let objData = JSON.parse(data)


    if (req.url === "/") {
        res.end("hello from the server side")
    } else if (req.url === "/about") {
        res.end("hello from about us")
    } else if (req.url === "/empl") {

        res.end(objData[2].name)

    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1> page does't exist </h1>")
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log("listen to the 8000 port no ")
})