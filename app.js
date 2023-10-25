// const express = require('express');


// const app = express();


// //listen for request
// app.listen(3000);

// //home page
// app.get('/', (req, res) => {
//     //res.send('<p>Home Page</p>');

//     res.sendFile('./views/index.html', {root: __dirname});
// });


// //about page
// app.get('/about', (req, res) => {
//     //res.send('<p>About Page</p>');  //HTML

//     res.sendFile('./views/about.html');   //actual file
// });


// //redirect
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

// //404
// app.use((req, res) => {
//     res.status(404).sendFile('./views/404.html', {root: __dirname});   //sends 404 page to browser

// });