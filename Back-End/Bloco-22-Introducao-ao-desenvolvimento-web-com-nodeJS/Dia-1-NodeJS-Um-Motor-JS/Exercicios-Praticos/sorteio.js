const readlineSync = require('readline-sync');

let wantPlay = true;

const generateRandomNumber = (limit) =>  Math.floor(Math.random() * (limit + 1))

const verifyAnswer = (userAnswer) => {
  const randomNumber = generateRandomNumber(10)
  userAnswer === randomNumber ? (
    console.log('Parabéns, número correto!')
    ) : (
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
    )
   
}

while(wantPlay) {
  const userAnswer = readlineSync.questionInt('Qual o numero (0 - 10) ? ')
  verifyAnswer(userAnswer);
  wantPlay = readlineSync.keyInYN('Deseja jogar de novo ? ')
}