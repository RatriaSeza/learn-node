const yargs = require('yargs');
const { saveUser } = require('./users');

yargs.command({
  command: 'add',
  describe: 'Create new user',
  builder: {
    name: {
      describe: 'User name',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'User email',
      demandOption: true,
      type: 'string'
    },
    age: {
      describe: 'User age',
      demandOption: true,
      type: 'number'
    }
  },
  handler(argv) {
    saveUser(argv.name, argv.email, argv.age)
  }
})

yargs.parse()