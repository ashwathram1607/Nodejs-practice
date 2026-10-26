const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const server = http.createServer((req, res) => {

    const filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, "utf8", (error, data) => {

        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });

            res.end("Error loading HTML file");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});