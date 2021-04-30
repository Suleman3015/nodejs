const fs = require('fs')
const http = require('http')

server = http.createServer((req, res) => {
    // const rstream = fs.createReadStream("maan.txt");
    // rstream.on('data', (chunkdata) => {
    //     res.write(chunkdata)
    // })
    // rstream.on("end", () => {
    //     res.end()
    // })

    // rstream.on("error", (err) => {
    //     console.log(err)
    //     res.end("file not found")
    // })

    //2nd way and the shortes way

    const rstream = fs.createReadStream("maan.txt");
    rstream.pipe(res)
})


server.listen(8000, "127.0.0.1")