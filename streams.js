const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });

const writeStream = fs.createWriteStream('./docs/blog4.txt')

.on() => event listener
readStream.on('data', (chunk) => {
    console.log('----- NEW CHUNK -----');
    console.log(chunk.toString());

    writeStream.write('\nNEW CHUNK\n') //write new chunk and pass to new file
    writeStream.write(chunk);
});



// //piping
readStream.pipe(writeStream) //opens read, reads data, passes to write