const fs = require("fs")
const http = require("http")
var requests = require("requests")
const homeFile = fs.readFileSync("index.html", "utf-8")
const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp)
    temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min)
    temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max)
    temperature = temperature.replace("{%location%}", orgVal.main.name)
    temperature = temperature.replace("{%country%}", orgVal.sys.country)
    return temperature
}

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests('http://api.openweathermap.org/data/2.5/weather?q=karachi&appid=5bb29cb48a34b15424832e66cdf7049e')
            .on('data', function (chunk) {
                const objData = JSON.parse(chunk)
                const arrData = [objData]
                const realData = arrData.map((val) => replaceVal(homeFile, val)).join("")
                res.write(realData)
                // console.log(arrData)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });

    }
})

server.listen(8000, "127.0.0.1")