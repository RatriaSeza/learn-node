// const validator = require('validator');
// const chalk = require('chalk');

import chalk from "chalk";

// let check = validator.isEmail('satria@gmail.com')
// let check = validator.isMobilePhone('081234567890', 'id-ID')
// let check = validator.isNumeric('081234567890')
// console.info(chalk.italic('Hello world!'))
const message = chalk`Lorem ipsum dolor {bgRed sit amet} consectetur adipisicing elit.`;
console.log(`
  CPU: ${chalk.red("90%")}
  RAM: ${chalk.blue("40%")}
  DISK: ${chalk.yellow("70%")}
`);
