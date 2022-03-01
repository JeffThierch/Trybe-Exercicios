const readline = require('readline');
const fs = require('fs').promises;

const question = (message) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(message, (answer) => {
      rl.close();
      resolve(answer)
    })
  })
}

async function main() {
  try {
    const userAnswer = await question('Qual arquivo deseja utilizar? ');

    const fileData = await fs.readFile(userAnswer, 'utf8')

    const userWord = await question('Qual a palavra deseja substituir? ');

    const userNewWord = await question(`Qual a palavra ira substituir ${userWord}? `);

    const newFile = fileData.replace(new RegExp(userWord, 'gi'), userNewWord)

    const userNewFile = await question('Qual arquivo de destino? ');

    await fs.writeFile(userNewFile, newFile);

    console.log(newFile)

  } catch {
    console.log('Arquivo inexistente')
    process.exit(1)
  }
}

main()