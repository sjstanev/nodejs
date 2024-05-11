const http = require('http') //load build-in package http 
const fs = require('fs');

const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')

const server = http.createServer((req, res) => {
    // createServer is mehtod that contain callback function
    // callback function contain req and res object 

    if (req.url === '/about') {
        res.end(aboutPage)
    } else if (req.url === '/contact') {
        res.end(contactPage)
    } else if (req.url === '/') {
        res.end(homePage)
    } else {
        res.writeHead(404)
        res.end(notFoundPage)
    }
    console.log(`requsted URL is: ${req.url}`)
})

server.listen(3000)