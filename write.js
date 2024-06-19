const directory = './';
import fs from 'fs';

fs.readdir(directory, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
