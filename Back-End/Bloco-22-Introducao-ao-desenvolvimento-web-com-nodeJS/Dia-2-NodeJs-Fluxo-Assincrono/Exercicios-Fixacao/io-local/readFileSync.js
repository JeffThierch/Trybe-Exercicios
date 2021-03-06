const fs = require('fs')

const readFileSyncFunc = (fileName) => {
  const data = fs.readFileSync(fileName, 'utf8')
  console.log(data)
}

try {
  readFileSyncFunc('./my-file.txt')

} catch (err) {
  console.log(`Erro ao ler o arquivo: ${err.path}`)
  console.log(err);
}

// ou

/* try {
  const data = fs.readFileSync('./my-file.txt')
  console.log(data)
} catch (err) {
  console.log(`Erro ao ler o arquivo: ${err.path}`)
  console.log(err);
} */