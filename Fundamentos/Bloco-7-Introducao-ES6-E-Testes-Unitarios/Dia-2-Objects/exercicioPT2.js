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