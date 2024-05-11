const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');
// add the files property to the req object so that we can 
// access the uploaded files using req.files
const fileUpload = require('express-fileupload');

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const aboutController = require('./controllers/about')
const validateMiddleWare = require('./controllers/validationMiddleware')

// to serving static file with express
// app.use is a special function adding a function to 
// our application's middleware stack
app.use(express.static('public'));


// custom middleware, they always ends with `next` method
// or the middleware function will hang up
const customMiddleWare = (req, res, next) => {
    console.log('Custom MiddleWare Function')
    next()
}
app.use(customMiddleWare)


// EJS is templating language that let us
// generate HTML with plain JavaScript in simple straightfowrward
// scriplet tags i.e. <%=...%> 
const ejs = require('ejs');

// with app.set('view engine', 'ejs'), we tell Express to
// use EJS as our templating engine, that any file
// ending with .ejs should be rendered with EJS package
app.set('view engine', 'ejs');


// to connect to MongoDB we use package mongoose
// if my_database doesn't exist it will be created automatically for us
// folder `models` will contain "models" which are object
// that represent collections in our database
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true})
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

// When the form is submitted, the browser make POST request to the /post/store/
// A `POST` request is needed to pass form data from browser to Node.js app
// to create a record to database

// Ih the function app.post('/post/store/', (req, res) => console.log(req.body))
// we get the form data from the browser via the request `body` attribute.
// to enable this, we need to install the body parsing middleware by adding
app.use(express.json())
app.use(express.urlencoded()) //this middleware parse data from the `<form>` and put it in the req.body param

// the body parsing middleware parse incoming request bodies in a middleware and make
// the form data available under the req.body property

// register the package in Express with app.use(fileUpload())
app.use(fileUpload())


// validation middleware, that check whether the image is uploaded
// this function must be after the app.use(fileUpload)

app.use('/post/store', validateMiddleWare);


app.listen(4000, () => {
    console.log('App listening on port');
})

// this send you to create.js New Post Form
app.get('/post/create', (req, res) => {
    console.log(req.url);
    res.render('create');
})

app.get('/', homeController)
app.get('/about', aboutController)
app.get('/post/new', newPostController)
app.get('/post/:id', getPostController)
app.post('/post/store', storePostController)


app.get('/contact', (req, res) => {
    //res.sendFile(path.resolve(__dirname, 'public/pages/contact.html'))
    console.log(req.url);
    res.render('contact');
})

// 404 Not Found
app.get('*', (req, res) => {
    console.log(req.url);
    res.statusCode = 404
    res.render('notfound')
})



// FOUND BUG if send /post/new => the app stop working and crash