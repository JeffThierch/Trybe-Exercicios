const fs = require('fs').promises;
const readline = require('readline');

const question = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer)
    })
  })
  
}

async function main() {
  try {
    const answer = await question('Qual arquivo voce deseja ler? ')
    
    const fileData = await fs.readFile(answer, 'utf8')

    console.log(fileData)
   
  } catch {
    console.log('Arquivo inexistente')
    process.exit(1)
  }
}

main()