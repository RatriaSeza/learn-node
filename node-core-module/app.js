const { questions, saveUser } = require('./users');

const main = async () => {
	const name = await questions('Enter your name: ');
	const email = await questions('Enter your email: ');
	const age = await questions('Enter your age: ');

	saveUser(name, email, age);
};

main()