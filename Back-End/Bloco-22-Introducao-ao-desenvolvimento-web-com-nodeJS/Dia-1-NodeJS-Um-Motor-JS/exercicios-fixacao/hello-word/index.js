const readlineSync = require('readline-sync');

const name = readlineSync.question('Qual seu nome? ');
const age = readlineSync.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
//console.log('Hello, word');