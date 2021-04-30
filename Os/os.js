let os = require("os")

// use .arch command to find the arch like 32,64,
let arch = os.arch()

// Returns an array of objects containing information about each logical CPU core.
let cpu = os.cpus()

// Returns the amount of free system memory in bytes as an integer.
let freeMemory = os.freemem()
// console.log(`${freeMemory / 1024 / 1024}`)

//Returns the total amount of system memory in bytes as an integer.
let totalMemory = os.totalmem()
console.log(totalMemory)


//Returns the string path of the current user's home directory.
let Homedir = os.homedir()

//Returns the host name of the operating system as a string.
let Hostname = os.hostname()

//Returns an array containing the 1, 5, and 15 minute load averages.
let loadsvg = os.loadavg()

//Returns a string identifying the operating system platform. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos', and 'win32'.
let Platform = os.platform()

let releas = os.release()

