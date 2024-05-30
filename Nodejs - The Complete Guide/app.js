const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    //process.exit() //hard exit event loop
});

// Start listener on specific port
server.listen(4000)

