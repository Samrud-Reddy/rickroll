const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    const ip = req.socket.remoteAddress;
    console.log(ip)

    fs.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
