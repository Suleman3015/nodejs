const chalk = require('chalk');
const validator = require("validator")
console.log(chalk.blue.inverse('Hello world!'));

let email = validator.isEmail('foo@barcom');
console.log(email ? chalk.green.inverse(email) : chalk.red.inverse(email))