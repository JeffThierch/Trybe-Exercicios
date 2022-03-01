const fs = require('fs').promises;

const returnCharacterInfos = (characterID) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile('./simpsons.json', 'utf8')
      .then((data) => {
        const parsedData = JSON.parse(data)
        const haveID = parsedData.some(({id}) => id === characterID.toString())

        if(!haveID) {
          return reject(new Error('id não encontrado'))
        }

        return resolve(parsedData.find(({id}) => id === characterID.toString()))
      })
      .catch((err) => reject(new Error(err.message))
      )
  })
  return promise
}

returnCharacterInfos('1').then((data) => console.log(data))