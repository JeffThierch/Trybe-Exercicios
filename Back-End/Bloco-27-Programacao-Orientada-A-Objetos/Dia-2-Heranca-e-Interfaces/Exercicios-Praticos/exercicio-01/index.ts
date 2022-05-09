import Person from './Person';
import Student from './Student';
import Subject from './Subject';
import Teacher from './Teacher';

const jeff = new Person('Jeff', new Date('2000/08/07'));
const robertin = new Person('Robertin', new Date('1980/01/01'));

console.log(jeff);
console.log(robertin);

const student01 = new Student(jeff);
const student02 = new Student(robertin);

console.log(student01);
console.log(student02);

const math = new Subject('Math');
const history = new Subject('History');
const philosophy = new Subject('Filosofia');

const Marcos = new Person('Marcos', new Date('1981/01/01'));
const mathTeacher = new Teacher(Marcos, math, 1600, new Date('2020/03/01'));

const Joao = new Person('Joao', new Date('1990/03/01'));
const historyTeacher = new Teacher(Joao, history, 1500, new Date('2021/04/01'));

const Marcelo = new Person('Marcelo', new Date('1983/07/01'));
const philosophyTeacher = new Teacher(Marcelo, philosophy, 1500, new Date('2021/02/01'));

console.log(mathTeacher);
console.log(historyTeacher);
console.log(philosophyTeacher);