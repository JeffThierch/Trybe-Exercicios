const wakeUp = () => 'Acordando!!';
const coffeTime = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (action) => action();

console.log(doingThings(coffeTime));