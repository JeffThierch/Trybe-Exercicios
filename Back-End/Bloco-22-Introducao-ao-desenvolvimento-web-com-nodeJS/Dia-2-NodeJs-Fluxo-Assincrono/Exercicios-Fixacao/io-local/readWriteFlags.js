const fs = require('fs').promises;

const myFile = './my-file.txt'

fs.writeFile(myFile, 'Olaa fui modificado dnv', {flag: 'wx'})
  .then(() => {
    console.log('Arquivo salvo')
  })
  .catch((err) => {
    console.error(`err: ${err.message}`);
  })