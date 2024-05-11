const express = require('express');
const app = express();

// EJS is templating language that let us
// generate HTML with plain JavaScript in simple straightfowrward
// scriplet tags i.e. <%=...%> 
const ejs = require('ejs');


app.listen(4000, () => {
    console.log('App listening on port 4000');
})

/*************************
 * 
 * app.set () 
 * 
 * **********************/ 

// with app.set('view engine', 'ejs'), we tell Express to
// use EJS as our templating engine, that any file
// ending with .ejs should be rendered with EJS package
app.set('view engine', 'ejs');

/*************************
 * 
 * app.get () 
 * 
 * **********************/ 

app.get('/', (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    //res.send('works')
    res.render('index')
})

