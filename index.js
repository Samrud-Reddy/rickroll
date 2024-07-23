const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {

    const ip = req.headers['x-forwarded-for'];   
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
server.listen(PORT, "0.0.0.0", () => {
        console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
