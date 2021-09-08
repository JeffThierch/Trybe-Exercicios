function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

function addClassHoliday(element, day) {
  if (day === 24 || day === 25 || day === 21) {
    let holiday = element.classList = "day holiday";
    return holiday;
  }
};

function addClassFriday(element, day) {
  if (day === 4 ||day === 11 ||day === 18 ||day === 25){
    let friday = element.classList = "day friday";
    return friday;
  }
};

function insertDayInCalendar(arrayDias) {
  /* Passo a Passo (Baby Steps) - 
1- criar a funcao 
2- criar o array dos dias
3- criar o elemento li
4- atribuir a classe ao elemento criado
5- atribuir o elemento criado a seu pai
6- iterar sobre os dias do array
7- pegar dia a dia e adicionar ao elemento a seu respectivo dia da li 
8- verificar se e feriado se sim adicionar a classe
9- verificar se e sexta feira adicionar a classe*/

  for(index = 0; index < arrayDias.length; index += 1){
    let listOfDays = document.createElement('li');
    listOfDays.classList = "day";
    let days = document.querySelector("#days");
    days.appendChild(listOfDays);
    listOfDays.innerText = arrayDias[index];
  
    addClassHoliday(listOfDays, arrayDias[index]);
    addClassFriday(listOfDays, arrayDias[index]);
  }
}

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

insertDayInCalendar(dezDaysList)