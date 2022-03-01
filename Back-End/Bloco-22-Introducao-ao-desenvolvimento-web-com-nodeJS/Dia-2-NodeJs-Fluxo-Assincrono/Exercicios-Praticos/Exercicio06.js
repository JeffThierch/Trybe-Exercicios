const fs = require('fs').promises;

const removeIdsFromDocument = async () => {
  try {
    const characterInfos = await fs.readFile('./simpsons.json', 'utf8');
    const filteredCharacters = JSON.parse(characterInfos).filter(({id}) => id !== '10' && id !== '6')
    await fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacters, null, 2))
  } catch (error) {
    console.error(error.message);
  }
    
}

removeIdsFromDocument()