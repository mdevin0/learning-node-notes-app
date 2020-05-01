const chalk = require('chalk');


const success = function(message) {
    console.log(chalk.green(message));
}

const fail = function(message) {
    console.log(chalk.red(message));
}

const warn = function(message) {
    console.log(chalk.yellow(message));
}

const info = function(message) {
    console.log(message);
}

const emphasize = function(message) {
    console.log(chalk.bold.underline(message));
}

const error = function(message) {
    console.error(chalk.red.bold(message));
}

module.exports = {
    success,
    fail,
    warn,
    info,
    emphasize,
    error
}