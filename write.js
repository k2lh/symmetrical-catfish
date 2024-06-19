import fs from 'fs';

const directory = './';
const path = "./";
const files = fs.readdirSync(path);

// fs.readdir(directory, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });

files.forEach(file => echo(file));
