const fs = require('fs').promises;

const replaceNelsonFromSimpsonsFamily = async () => {
  try {
    const characterInfos = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf8')

    const filteredCharacter = JSON.parse(characterInfos).filter(({name}) => name === 'Maggie Simpson')

    const newSimpsonsFamily = JSON.parse(simpsonFamily).map((character) => {
      const {name} = character

      if(name.includes('Nelson')) {
        return filteredCharacter[0]
      }
      
      return character
    })

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonsFamily, null, 2))
  } catch (error) {
    console.error(error.message);
  }
    
}

replaceNelsonFromSimpsonsFamily()