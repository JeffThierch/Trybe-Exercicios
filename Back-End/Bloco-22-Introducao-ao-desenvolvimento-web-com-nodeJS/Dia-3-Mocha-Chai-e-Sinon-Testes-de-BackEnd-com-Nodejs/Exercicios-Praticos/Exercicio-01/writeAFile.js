const fs = require('fs');

function writeAFile(fileName, fileContent) {
  try {
    fs.writeFileSync(fileName, fileContent);

    return 'ok'
  }
  catch (err) {
    return 'Ocorreu um problema, tente novamente'
  }
}

module.exports = writeAFile