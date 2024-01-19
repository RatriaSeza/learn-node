// core module
const fs = require('fs');

// write string to file sychronously
// try {
//   fs.writeFileSync('./node-core-module/data/hello.txt', 'Hello from Node.js');
// } catch (err) {
//   console.error(err);
// }

//  write string to file asynchronously
// fs.writeFile('./node-core-module/data/hello.txt', 'Hello from Node.js asynchronously', (err) => {
//   if (err) {
//     console.error(err);
//   }
// })

// read file synchronously
// const read = fs.readFileSync('./node-core-module/data/hello.txt', 'utf8')
// console.log(read);

// fs.readFile('./node-core-module/data/hello.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })

// readline

const readline = require('readline').Interface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Enter your name: ', (name) => {
  readline.question('Enter your age: ', (age) => {
    const user = { name, age }
    const users = fs.readFileSync('./node-core-module/data/user.json', 'utf8')
    const data = JSON.parse(users)

    data.push(user)
    fs.writeFileSync('./node-core-module/data/user.json', JSON.stringify(data, null, 2))
    console.log('Data has been written to file');

    readline.close()
  })
})