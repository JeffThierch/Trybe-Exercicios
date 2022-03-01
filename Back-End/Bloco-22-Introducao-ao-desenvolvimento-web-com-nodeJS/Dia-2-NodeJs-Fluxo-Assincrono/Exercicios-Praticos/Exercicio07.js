const fs = require('fs').promises;

const createNewFile = async () => {
  try {
    const characterInfos = await fs.readFile('./simpsons.json', 'utf8');
    const filteredCharacters = JSON.parse(characterInfos).filter(({id}) => Number(id) <= 4)

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredCharacters, null, 2))
  } catch (error) {
    console.error(error.message);
  }
    
}

createNewFile()