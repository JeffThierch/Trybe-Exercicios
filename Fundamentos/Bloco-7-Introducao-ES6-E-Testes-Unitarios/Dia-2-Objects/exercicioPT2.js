const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* 1- Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const addKeyAndValue = (object, key, value) => object[key] = value;
addKeyAndValue(lesson2, 'turno', 'noite')
console.log(lesson2)

/* 2- Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const listKeys = (object) => Object.keys(object)
console.log(listKeys(lesson3));

/* 3- Crie uma função para mostrar o tamanho de um objeto. */

const objectSize = (object) => Object.keys(object).length;
console.log(objectSize(lesson3))

/* 4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.  */

const objectValue = (object) => Object.values(object);
console.log(objectValue(lesson3));

/* 5- Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 */
const allLessons = {}
Object.assign(allLessons, {lesson1},{lesson2},{lesson3})
console.log(allLessons)

/* 6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.  */

const totalOfStudents = (object) => {
  let numberOfStudents = 0
  for (const key in object) {
    numberOfStudents += object[key]['numeroEstudantes']
  }
  return `Existem ${numberOfStudents} Estudantes `
}

console.log(totalOfStudents(allLessons))

/* 7- Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto */

const valueInPosition = (object, index) => Object.values(object)[index];
console.log(valueInPosition(lesson1, 0));

/* 8- Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.  */

const verifyKeyValue = (object, key, value) => {
  const entries = Object.entries(object)
  let equal = false
  for (const i in entries) {
    if ((entries[i][0] === key && entries[i][1] === value)) {
       equal = true
     }
  }
  return equal
}
console.log(verifyKeyValue(lesson3, 'turno', 'dia'))

/* BONUS 01 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5. */

const countStudentsOfMath = (object) => {
 let total = 0;
 const arrayAulas = Object.keys(object);
 for (i in arrayAulas) {
  if (object[arrayAulas[i]].materia === "Matemática") {
    total += object[arrayAulas[i]].numeroEstudantes
  }
 }
 return console.log(total)
}
countStudentsOfMath(allLessons)


const info = (name) => {
  let lessons = [];
  let students = 0;
  const valuesArray = Object.values(allLessons);
  for (i in valuesArray) {
    if (valuesArray[i].professor === name) {
      lessons.push(valuesArray[i].materia)
      students += valuesArray[i].numeroEstudantes
    }
  }
  return {tarefas : lessons, estudantes: students }
}

const createReport = (allLessons, name) => {
  const report = {}
  report.professor = name;
  Object.assign(report, info(name));
  return report
}

console.log(createReport(allLessons, 'Maria Clara'));