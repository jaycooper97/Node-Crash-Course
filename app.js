// const express = require('express');
// const morgan = require('morgan');

//register view engine
//app.set('view engine', 'ejs');



// const app = express();


// //listen for request
// app.listen(3000);

//middleware and static files
application.use(express.static('public'));



application.use(morgan('dev'));



//middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path:', req.path);
//     console.log('method:', req.method)
//     next();
// });


// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });


//home page
// app.get('/', (req, res) => {
    //const blogs = [
        // {title: 'Yoshi found eggs', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil dolore quod, blanditiis dolorum inventore tempora qui ex laborum sint nulla, sunt molestias officia quos doloremque nesciunt porro dolor! Ratione.'}
        // {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil dolore quod, blanditiis dolorum inventore tempora qui ex laborum sint nulla, sunt molestias officia quos doloremque nesciunt porro dolor! Ratione.'}
        // {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto nihil dolore quod, blanditiis dolorum inventore tempora qui ex laborum sint nulla, sunt molestias officia quos doloremque nesciunt porro dolor! Ratione.'}
   // ];
//     //res.send('<p>Home Page</p>');

//     res.render('idex', { title: 'Home', blogs});
// });


// //about page
// app.get('/about', (req, res) => {
//     //res.send('<p>About Page</p>');  //HTML

//     res.render('about', { title: 'About' })   //actual file
// });


// application.get('/blogs', (req, res) => {
//     res.render('create', { title: 'Create a New Blog' });
// })

// //404
// app.use((req, res) => {
//     res.status(404).render('404', { title: '404' });   //sends & renders 404 page to browser

// });