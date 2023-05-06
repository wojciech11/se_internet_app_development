const http = require("http");
const axios = require("axios");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "application/json");

	axios
		.get(
			"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
		)
		.then((response) => {
			console.log(response.data);
			res.statusCode = 200;
			res.write(JSON.stringify(response.data));
			res.end();
		})
		.catch((error) => {
			console.log(error);

			res.statusCode = 500; // czy 424 byłby lepszy?
			res.end(JSON.stringify({ error: error.message }));
		});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
