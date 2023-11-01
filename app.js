const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

// register view engine
app.set('view engine', 'ejs');



const app = express();

//connects to mongodb
const dbURI = 'mongodb+srv://jaycoops97:drizzydrake1986@cluster0.yqhphyj.mongodb.net/'

mongoose.connect(dbURI, { userNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(3000)).catch((err) => console.log(err));


// middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));


//mongoose & mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = newBlog({
//         title: "new blog",
//         snippet: "about my new blog",
//         body: "more about my new blog"
//     });
//     blog.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// });


// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//     .then((result) => {
//         res.send(result);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// })


// app.get('/single-blog', (req, res) => {
//     Blog.findById('6541a8d5cc2b7191f1bc6d38')
//       .then((result) => {
//         res.send(result)
//       })
//       .catch((err) => {
//         console.log(err);
//     });
// })



//middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method)
    next();
});


app.use((req, res, next) => {
    console.log('in the next middleware');
    next();
});


//home page
app.get('/', (req, res) => {
    res.redirect('/blogs');
    /*const blogs = [
        {title: 'Yoshi found eggs', snippet: 'Lorem ipsum dolor, sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor, sit amet consectetur'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor, sit amet consectetur'}
   ];
    res.send('<p>Home Page</p>');

    res.render('idex', { title: 'Home', blogs});*/
});


// //about page
app.get('/about', (req, res) => {
    //res.send('<p>About Page</p>');  //HTML

    res.render('about', { title: 'About' })   //actual file
});

app.use('/blogs', blogRoutes);


// //404
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });   //sends & renders 404 page to browser

});