import http from "http";

const server = http.createServer((req, res) => {
    res.write(`Number: ${Math.floor(Math.random() * 100)} `);
    res.end("is generated this time!");
});

server.listen(8081);
