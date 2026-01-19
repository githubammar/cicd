const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World from Node App!   my all the process is working properly Congratulations!\n");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

