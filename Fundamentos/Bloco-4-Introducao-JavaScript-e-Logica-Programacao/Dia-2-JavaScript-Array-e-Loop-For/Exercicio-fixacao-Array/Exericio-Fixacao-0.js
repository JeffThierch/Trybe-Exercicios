let listaDeTarefas = [
  "Tomar Banho", "Arrumar o Quarto", "Limpar a Casa", "Fazer Comida", "Estudar o Course"
];

console.log(listaDeTarefas.length); // 5

let searchForFistTask = listaDeTarefas[0];

console.log(searchForFistTask);

let searchForLastTask = listaDeTarefas[listaDeTarefas.length -1];

console.log(searchForLastTask);

listaDeTarefas.push("Comer") // adiciona mais uma tarefa

console.log(listaDeTarefas)

listaDeTarefas.unshift("Acordar") // adiciona uma tarefa no incio da lista

console.log(listaDeTarefas)

listaDeTarefas.pop() // remove a ultima tarefa

console.log(listaDeTarefas)

listaDeTarefas.shift(); // remove o primeiro item

console.log(listaDeTarefas)

let indexOfTask = listaDeTarefas.indexOf("Fazer Comida") // mostra o indice do elemento

console.log(indexOfTask)