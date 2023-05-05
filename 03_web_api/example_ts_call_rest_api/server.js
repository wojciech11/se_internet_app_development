const http = require("http");
const axios = require("axios");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");

	axios
		.get(
			"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
		)
		.then((response) => {
			res.status(200).json(response.data);
			//console.log(response.data.squadName);
			//console.log(response.data.homeTown);
		})
		.catch((error) => {
			//console.log(error);

			// moglobysmy rowniez zwrocic
			// error code 424
			res.status(500).json(response.data);
		});
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
