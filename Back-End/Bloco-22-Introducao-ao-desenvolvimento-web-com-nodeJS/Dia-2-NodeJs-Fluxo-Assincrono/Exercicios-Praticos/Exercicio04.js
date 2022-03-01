const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((data) => {
    JSON.parse(data).map(({id, name}) => console.log(`${id} - ${name}`))
  })
  .catch((err) => {
    console.log(err.message)
    process.exit(1)
  })