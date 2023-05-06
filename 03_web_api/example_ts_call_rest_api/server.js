"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var axios_1 = require("axios");
var hostname = "127.0.0.1";
var port = 3000;
var server = http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    axios_1.default
        .get("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json")
        .then(function (response) {
        console.log(response.data);
        res.statusCode = 200;
        res.write(JSON.stringify(response.data));
        res.end();
    })
        .catch(function (error) {
        console.log(error);
        res.statusCode = 500; // czy 424 byłby lepszy?
        res.end(JSON.stringify({ error: error.message }));
    });
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
