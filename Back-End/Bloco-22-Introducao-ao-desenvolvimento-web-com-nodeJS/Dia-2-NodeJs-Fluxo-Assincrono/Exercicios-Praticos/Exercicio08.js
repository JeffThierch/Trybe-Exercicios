const fs = require('fs').promises;

const addsNelsonToFamily = async () => {
  try {
    const characterInfos = await fs.readFile('./simpsons.json', 'utf8');
    const simpsonFamily = await fs.readFile('./simpsonFamily.json', 'utf8')

    const filteredCharacter = JSON.parse(characterInfos).filter(({name}) => name === 'Nelson Muntz')

    const newSimpsonsFamily = [...JSON.parse(simpsonFamily), ...filteredCharacter ]

    await fs.writeFile('./simpsonFamily.json', JSON.stringify(newSimpsonsFamily, null, 2))
  } catch (error) {
    console.error(error.message);
  }
    
}

addsNelsonToFamily()