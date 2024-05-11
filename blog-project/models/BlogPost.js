const mongoose = require('mongoose');

// collection represent entity in our app
// schema represent how collection looks like
// models are defined through the Schema interface
const Schema = mongoose.Schema;


// each `document` in `collection` would have the fields specified in Schema
// this create a new `instace object`
// in the object we describe object's properties
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        /*it declare property type with an object like this because we need `default`*/
        type: Date,
        default: new Date()
    },
    image: String
}); // we can put a seceond argument to object {timestamps: true} to add timestamps to each records 

// we access the database via `mongoose.model`
// the first argument is hte singular name of the collection you model is for
// mongoose automatically looks for the plural version of your `model` name
// in your case `BlogPost`, mongoose will create the model for our `BlogPosts` collection
const BlogPost = mongoose.model('BlogPost', BlogPostSchema); 
/* 
    first argument is: name of model
    second argument is: Schema we use to create that object
*/


// export the BlogPost varialble so that when other files requre this file,
// they know to grab BlogPost. You can export only one variable.
module.exports = BlogPost

// now we can use this model to save. get new `documents` to our `collection`

