/* Exercicio 3 */

const btnclick = document.getElementById('btn-click')
let clickCount = 0
const counter = document.getElementById('contador');
const clickCounter = () => {
  clickCount += 1
  counter.innerHTML = `${clickCount} clicks`
}

btnclick.addEventListener('click', clickCounter)
