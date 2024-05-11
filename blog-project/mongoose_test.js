const mongoose = require('mongoose');

// we import `BlogPost` model, `BlogPost` represent the `BlogPosts` collection in the database
const BlogPost = require('./models/BlogPost.js').default;

console.log(BlogPost)
// connect to DB if my_database doesn't exist it will be created automatically
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true });

// create new BlogPost `document` in our database

// BlogPost.create({
//     title: 'New Records',
//     body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, ipsam ex aliquid beatae necessitatibus aliquam obcaecati debitis labore. Minima distinctio unde numquam atque quas iure magnam maiores, perspiciatis iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam, ipsam ex aliquid beatae necessitatibus aliquam obcaecati debitis labore. Minima distinctio unde numquam atque quas iure magnam maiores, perspiciatis iusto'
// })

const id = "66256d050256f93d8e2ec410";

// console.log(Object.getOwnPropertyNames(BlogPost.find({})))
// console.log(BlogPost.find({})._fields)

//console.log(BlogPost.findById({id}))

//BlogPost.findByIdAndUpdate(id, {title: 'Updated by ID'})

//BlogPost.findByIdAndDelete({id})

BlogPost.deleteOne(id); B