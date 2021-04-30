const EventEmitter = require("events")
const event = new EventEmitter()

event.on("hello", () => {
    console.log("hello event")
})


//you can also call more than one events through one
// event.on("hello", () => {
//     console.log("hello tabbu")
// })

// event.on("hello", () => {
//     console.log("hello mani")
// })


event.emit("hello")

// event with parameter

event.on("status", (msg, code) => {
    console.log(`${msg} you status is ${code}`)
})
event.emit("status", "hello good morning", "ok")