const fs = require('fs').promises;

const meuArquivo = './my-file.txt'

fs.readFile(meuArquivo, 'utf8')
  .then((data) => {
    console.log(`Conteudo: ${data}`)
  })
  .catch((err) => {
    console.log(`Ocorreu um erro ao ler o arquivo ${meuArquivo}\n Erro: ${err}`)
    process.exit(1)
  })
