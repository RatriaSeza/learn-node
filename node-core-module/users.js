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

const saveUser = (name, email, age) => {
  const user = { name, email , age};
	const users = fs.readFileSync("./node-core-module/data/user.json", "utf8");
	const data = JSON.parse(users);

	data.push(user);
	fs.writeFileSync("./node-core-module/data/user.json", JSON.stringify(data, null, 2));
	console.log("Data has been written to file");

  readline.close()
}

module.exports = { questions, saveUser };