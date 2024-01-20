// core module
const fs = require("fs");

const readline = require("readline").Interface({
	input: process.stdin,
	output: process.stdout,
});

const dirPath = "./node-core-module/data";

if (!fs.existsSync(dirPath)) {
	fs.makeDirSync(dirPath);
}

if (!fs.existsSync(`${dirPath}/user.json`)) {
	fs.writeFileSync(`${dirPath}/user.json`, "[]", "utf8");
}

const questions = (question) => {
	return new Promise((resolve, reject) => {
		readline.question(question, (answer) => {
			resolve(answer);
		});
	});
};

const loadUser = () => {
	const users = fs.readFileSync("./node-core-module/data/user.json", "utf8");
	const data = JSON.parse(users);
	return data;
}

const saveUser = (name, email, age) => {
  const user = { name, email , age};
	const users = loadUser();

	const duplicateUser = users.find((user) => user.name.toLowerCase() === name.toLowerCase());

	if (duplicateUser) {
		return console.log("User already exists!");
	}

	users.push(user);
	fs.writeFileSync("./node-core-module/data/user.json", JSON.stringify(users, null, 2));
	console.log("Data has been written to file");

  readline.close()
}

const getAllUsers = () => {
	const users = loadUser();
	console.table(users);
}

const getUser = (name) => {
	const users = loadUser();
	const user = users.find((user) => user.name.toLowerCase() === name.toLowerCase());
	
	if (!user) {
		return console.log("User not found!");
	}

	console.log("User detail:");
	console.log(`Name: ${user.name}`);
	console.log(`Email: ${user.email}`);
	console.log(`Age: ${user.age}`);
}

const deleteUser = (name) => {
	const users = loadUser();
	const filteredUsers = users.filter((user) => user.name.toLowerCase() !== name.toLowerCase());

	if (users.length === filteredUsers.length) {
		return console.log("User not found!");
	}

	fs.writeFileSync("./node-core-module/data/user.json", JSON.stringify(filteredUsers, null, 2));
	console.log(`User ${name} has been deleted!`);
}

module.exports = { questions, saveUser, getAllUsers, getUser, deleteUser };