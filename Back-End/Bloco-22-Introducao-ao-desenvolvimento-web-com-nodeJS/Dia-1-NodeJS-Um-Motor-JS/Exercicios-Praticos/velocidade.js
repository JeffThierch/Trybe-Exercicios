const readlineSync = require('readline-sync');

const userDistancy = readlineSync.questionFloat('Qual a distancia (m)? ')
const userTime = readlineSync.questionFloat('Qual o tempo (s)? ')

const calcAvgSpeed = (distancy, time) => {
  const avgSpeed = distancy / time;
  console.log(
    `A velocidade media e de: ${avgSpeed.toFixed(2)} m/s ou ${(avgSpeed * 3.6).toFixed(2)} km/h`
    );
}

calcAvgSpeed(userDistancy, userTime)