const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf8')
  .then((data) => {
    JSON.parse(data).map((item) => console.log(`${item.id} - ${item.name}`))
  })
  .catch((err) => {
    console.log(err.message)
    process.exit(1)
  })