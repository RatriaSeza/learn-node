const http = require("http");
const fs = require("fs");

http
	.createServer((req, res) => {
		res.writeHead(200, {
			"Content-Type": "text/html",
		});

		const url = req.url;
		switch (url) {
			case "/about":
				renderHTML("web-server/about.html", res);
				break;
			case "/user":
				renderHTML("web-server/user.html", res);
				break;
			default:
				renderHTML("web-server/index.html", res);
				break;
		}
	})
	.listen(3000, () => {
		console.log("Server is up on port 3000");
	});

const renderHTML = (path, res) => {
	fs.readFile(path, (err, data) => {
		if (err) {
			res.writeHead(404);
			res.write("Error: File Not Found");
		} else {
			res.write(data);
		}
		res.end();
	});
};
