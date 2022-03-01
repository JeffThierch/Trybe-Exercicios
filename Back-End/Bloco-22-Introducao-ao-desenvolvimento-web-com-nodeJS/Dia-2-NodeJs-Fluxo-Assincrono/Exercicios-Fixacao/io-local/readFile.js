const fs = require('fs');

const meuArquivo = './my-file.txt'

fs.readFile(meuArquivo, 'utf8', (err, data) => {
  if (err) {
    console.log(`Ocorreu um erro ao ler o arquivo ${meuArquivo}\n Erro: ${err}`)
    process.exit(1)
  }
  console.log(`Conteudo: ${data}`)
})