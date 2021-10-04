const generateNumbers = () => {
 return Math.floor((Math.random() * 5) + 1);
}

const numberChecker = (myNumber, number) => myNumber === number

const prizeDraw = (number, callback) => {
  const myNumber = generateNumbers()
  return callback(myNumber, number) ? `Parabéns você ganhou` : `Tente novamente`
}

console.log(prizeDraw(3, numberChecker));