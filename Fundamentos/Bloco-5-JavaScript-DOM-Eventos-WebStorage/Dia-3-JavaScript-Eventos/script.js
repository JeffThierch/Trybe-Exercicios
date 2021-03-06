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
    let holiday = element.classList += " holiday";
    return holiday;
  }
};

function addClassFriday(element, day) {
  if (day === 4 ||day === 11 ||day === 18 ||day === 25){
    let friday = element.classList += " friday";
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

insertDayInCalendar(dezDaysList);

function createButtons(textButton, idButton) {
  let button = document.createElement('button');
  button.id = idButton
  button.innerText = textButton
  let dadElement = document.querySelector(".buttons-container")
  dadElement.appendChild(button)
}

createButtons("Feriados", "btn-holiday")


function swapColorOfHolidays(){
  let isChanged = false;
  let holidayButton = document.querySelector("#btn-holiday");
  holidayButton.addEventListener("click", function(){
    let holidays = document.querySelectorAll(".holiday");
    if(isChanged == false){
      for (index = 0; index < holidays.length; index += 1){
        holidays[index].style.backgroundColor = "red";
        holidays[index].style.color = "#fff";
      }
      isChanged = true;
    }
    else {
      for (index = 0; index < holidays.length; index += 1){
        holidays[index].style.backgroundColor = "rgb(238,238,238)";
        holidays[index].style.color = "#666";
    }
    isChanged = false;
    }
  })
}

swapColorOfHolidays();

createButtons("Sexta-feira", "btn-friday")

function swapTextOfFridays(){
  let isChanged = false;
  let fridayButton = document.querySelector("#btn-friday");
  fridayButton.addEventListener("click", function(){
    let fridays = document.querySelectorAll(".friday");
    let fridayNumber = [4, 11, 18, 25]
    if(isChanged == false){
      for (index = 0; index < fridays.length; index += 1){
        fridays[index].innerText = "Sextou!!";
      }
      isChanged = true;
    }
    else {
      for (index = 0; index < fridays.length; index += 1){
        for(i = 0; i < fridayNumber.length; i += 1){
          fridays[i].innerText = fridayNumber[i] 
        } /* Nao e o mais otimizado, porem por hora foi que consegui pensar */
    }
    isChanged = false;
    }
  })
}

swapTextOfFridays()

function zoomIn() {
  let day = document.querySelectorAll(".day")
  for (i = 0; i < day.length; i += 1){
    day[i].addEventListener("mouseover", function(event) {
      event.target.style.fontSize = "30px"
    })
  }
}

zoomIn()

function zoomOut() {
  let day = document.querySelectorAll(".day")
  for (i = 0; i < day.length; i += 1){
    day[i].addEventListener("mouseleave", function(event) {
      event.target.style.fontSize = "20px"
    })
  }
}
zoomOut()

createButtons("Adicionar Tarefa", "btn-task");

function createATask(stringTask) {
  let task = document.createElement("span");
  task.innerHTML = stringTask;
  fatherElement = document.querySelector(".my-tasks");
  fatherElement.appendChild(task);
}

function addTask(){
  taskButton = document.querySelector("#btn-task");
  taskButton.addEventListener("click", function(event){
    let color = window.prompt("Qual cor de legenda gostaria de escolher? (Em Ingles)")
    adicionaLegendas(color)
    let task = window.prompt("Qual tarefa gostaria de adicionar?");
    createATask(task);
    taskSelector()
    addTaskColorToDay()
  })
}
addTask();

function adicionaLegendas(cor) {
  let div = document.createElement("div");
  div.className = "task"
  div.style.backgroundColor = cor
  let fatherElement = document.querySelector(".my-tasks")
  fatherElement.appendChild(div)

}

function taskSelector() {
  let isSelect = false
  let task = document.getElementsByClassName("task")
  for (let i = 0; i < task.length; i += 1) {
    task[i].addEventListener("click", function(event){
      if(isSelect == false){
        event.target.className = "task selected"
        isSelect = true
      }
      else {
        event.target.className = "task"
        isSelect = false
      }
    })
  }
}


function addTaskColorToDay(){ /* Utilizei a logica do gabarito para a conclusao desse exercicio */
  let taskSelected = document.getElementsByClassName("task selected")
  let task = document.querySelector(".task")
  let taskBackground = task.style.backgroundColor;
  isSelect = false
  let days = document.querySelector("#days")

  days.addEventListener("click", function(event) {
    let colorEventTarget = event.target.style.color;
    if (taskSelected.length > 0 && colorEventTarget != taskBackground) {
      let color = taskSelected[0].style.backgroundColor;
      event.target.style.color = color;
    }
    else if (colorEventTarget === taskBackground && taskSelected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}

function addCompromisso(){
  let listaCompromisso = document.querySelector(".task-list")
  let input = document.querySelector("#task-input")
  let btnAdd = document.querySelector("#btn-add")

  btnAdd.addEventListener("click", function(){
    if(input.value.length > 0) {
      let novoComp = document.createElement("li")
      novoComp.innerText = input.value;

      listaCompromisso.appendChild(novoComp)
      input.value = ""
    }
    else{
      window.alert("Numero de Caracteres invalido")
    }
  })
  input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && input.value.length > 0) {
      let novoComp = document.createElement('li');
      novoComp.innerText = input.value;

      listaCompromisso.appendChild(novoComp);
      input.value = '';
    }
  });
}

addCompromisso()
