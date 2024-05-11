const http = require('http') //load build-in package http 
const server = http.createServer((req, res) => {
    // createServer is mehtod that contain callback function
    // callback function contain req and res object 

    if (req.url === '/about') {
        res.end('The About Page')
    } else if (req.url === '/contact') {
        res.end('The Contact Page')
    } else if (req.url === '/') {
        res.end('The Home Page')
    } else {
        res.writeHead(404)
        res.end('Page Not Found')
    }
    console.log(`requsted URL is: ${req.url}`)
})

server.listen(3000)