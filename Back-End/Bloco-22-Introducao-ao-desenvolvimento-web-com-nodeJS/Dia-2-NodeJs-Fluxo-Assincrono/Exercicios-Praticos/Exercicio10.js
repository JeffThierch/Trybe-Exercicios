const fs = require('fs').promises;



const createMultipleFiles = async () => {
  const arrayOfWords = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  await Promise.all(
    arrayOfWords.map((item, index) => fs.writeFile(`./file${index + 1}.txt`, item))
  )

  const filesData = await Promise.all(
    arrayOfWords.map((_, index) => fs.readFile(`./file${index + 1}.txt`, 'utf8'))
  )
  await fs.writeFile("./fileAll.txt", filesData.join(' '))
}

createMultipleFiles()