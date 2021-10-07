const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEvenNumber = (number) => number % 2 === 0;

const sumNumbers = (accumulator, number) => accumulator + number;

const sumEvenNumbers = (arrayNumbers) => arrayNumbers.filter(getEvenNumber).reduce(sumNumbers)

console.log(sumEvenNumbers(numbers));