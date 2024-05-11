const BlogPost = require('../models/BlogPost')

    module.exports = async(req, res) => {

    const blogposts = await BlogPost.find({}).sort('-1')

    // use sendFile to respond with html file instead json
    // res.sendFile need absolute path
    // using path packege with resolve method helps us to
    // get the full absolute path which otherwise is changed 
    // based on different OS
    //res.sendFile(path.resolve(__dirname, 'public/pages/index.html'))

    // console.log(req.url, blogposts);
    // by using res.render(), Express adds the render method
    // to response object. 
    // res.render('index') will look in a 'views' folder for index.ejs
    res.render('index', {
        blogposts
    });
}