const BlogPost = require('../models/BlogPost')
const path = require('path');

module.exports = (req, res) => {
    console.log(req.files.Image);



    let image = req.files.Image;
    console.log(`images path ${image}`)

    image.mv(path.resolve(__dirname, '..','public/assets/img/', image.name),
        // Do note the positionning of the `async` statement
        // Only in the scope where we use `await` should `async` be declare
        async (error) => {
            await BlogPost.create({
                ...req.body,
                image: '/assets/img/' + image.name
            })
            res.redirect('/') // after data is submit to db we redirect user to the home page
    })
}
