const fs = require('fs').promises

const meuArquivo = './my-file.txt'

fs.writeFile(meuArquivo, 'texto adicionado com o metodo writeFile')
  .then(() => {
    console.log('Modificado com sucesso')
  })
  .catch((err) => {
    console.error(`Erro ao modificar o arquivo ${meuArquivo}\n Error: ${err.message}`)
  })