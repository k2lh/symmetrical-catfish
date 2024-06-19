const fs = require('fs')

// directory path
const dir = './'

// list all files in the directory
fs.readdir(dir, (err, files) => {
  if (err) {
    console.log(err)
  }

  // files object contains all files names
  // log them on console
  files.forEach(file => {
    console.log(file)
  })
})
