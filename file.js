const fs = require('fs')


// //reading files (asynchronous)
fs.readFile('./docs/blog.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');  //executes this first


// //writing files
fs.writeFile('./docs/blog.txt', 'hello world', () => {
    console.log('file was written')
});

// //folder that doesn't exist - creates folder for me
fs.writeFile('./docs/blog2.txt', 'hello again', () => {
    console.log('file was written')
});


// //directories
if(!fs.existsSync('./assets')) {

   //blocks code, checks if something exists
fs.mkdir('./assets', (err) => {    //makes directory
    if(err) {
        console.log(err);
    }
    console.log('folder created');
});
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}


// //deleting files
if(fs.existsSync('./docs/deleteme.txt'))
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('file deleted');
    })