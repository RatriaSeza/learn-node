const yargs = require('yargs');
const { saveUser, getAllUsers, getUser, deleteUser } = require('./users');

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
}).demandCommand()

// show list of users
yargs.command({
  command: 'list',
  describe: 'List all users',
  handler() {
    getAllUsers();
  }
})

yargs.command({
  command: 'detail',
  describe: 'Show detail user',
  builder: {
    name: {
      describe: 'User name',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    getUser(argv.name)
  }
})

yargs.command({
  command: 'delete',
  describe: 'Delete user',
  builder: {
    name: {
      describe: 'User name',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    deleteUser(argv.name)
  }
})

yargs.parse()