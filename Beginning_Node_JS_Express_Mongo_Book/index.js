const express = require('express');
const path = require('path')
const app = express();

//to serving static file with express
// app.use is a special function adding a function to 
// our application's middleware stack
app.use(express.static('public'))

// 2nd argument is callback finction, executed when the server starts listening
app.listen(3000, () => {
    console.log("App listening on port 3000")
})

// can refactor one big request handler function into
// many smaller request hadler function that each handle a specific function
app.get('/author', (req, res) => {
    res.json({
        name: "Stanimir Stanev"
    })
})

app.get('/', (req, res) => {
    // use sendFile to respond with html file instead json
    // res.sendFile need absolute path
    // using path packege with resolve method helps us to
    // get the full absolute path which otherwise is changed 
    // based on different OS
    res.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})