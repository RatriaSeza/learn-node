function samplePromise() {
	return Promise.resolve("samplePromise");
}

const name = await samplePromise();

console.log(name);