const http = require('http');
const fs = require('fs');
const _ = require('lodash')

const server = http.createServer((req, res) => {
    console.log('request made');
})


//lodash
   const num = _.random(0, 20)
   console.log(num);

const greet = _.once(() => {
    console.log('hello');
});


    //set header content type
    res.setHeader('Content-Type', 'tetx/html');

//what url visitor went to
let path = './Views/';
switch (req.url) {
    case '/':
        path += 'index.html';
        res.statusCode = 200;
        break;

        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;

            case '/about-us':  //redirect
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
}


// /*send html file*/
fs.readFile(path, (err, data)=> {
    if(err) {
        console.log(err);
        res.end();
    } else {
        // res.write(data);  //use res.write() multiple times for multiple items
//         res.end(data);
     }
 });

//Content want to send to browser
// res.write('<head><link rel="stylesheet href="#></head>');
//     // res.write('<p>Hello ninjas</p>');
//     // res.write('<p>Hello again, ninjas</p>');

//     //ends response and sends to browser
//     res.end();
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000');
// });