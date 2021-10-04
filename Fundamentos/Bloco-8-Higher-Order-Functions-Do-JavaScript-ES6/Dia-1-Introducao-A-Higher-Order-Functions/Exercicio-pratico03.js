const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const answerChecker = (studentAnswer, rightAnswer) => {
  if (studentAnswer === rightAnswer) {
    return 1;
  }
  if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const nota = (rightAnswer, studentAnswer, callback) => {
  let contador = 0;
  for (let index = 0; index <= rightAnswer.length; index += 1) {
    const returnControl = callback(studentAnswer[index], rightAnswer[index]);
    contador += returnControl
  }
  return `Total : ${contador}`
}

console.log(nota(RIGHT_ANSWERS, STUDENT_ANSWERS, answerChecker ))