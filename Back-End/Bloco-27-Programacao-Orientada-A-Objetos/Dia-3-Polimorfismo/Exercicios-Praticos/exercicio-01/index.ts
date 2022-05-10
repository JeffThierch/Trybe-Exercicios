import { EvaluationResult } from './EvaluationResult';
import { Exam } from './Exam';
import { Student } from './Student';
import { Subject } from './Subject';
import { Teacher } from './Teacher';
import { Work } from './Work';


const student01 = new Student('Jeff', new Date('2000/08/07'));
const student02 = new Student('Robertin', new Date('1980/01/01'));

console.log(student01);
console.log(student02);

const math = new Subject('Math');
const history = new Subject('History');
const philosophy = new Subject('Filosofia');

const Marcos = new Teacher('Marcos', new Date('1981/01/01'), 1600, math);
const Joao = new Teacher('Joao', new Date('1990/03/01'), 1500, history);
const Marcelo = new Teacher('Marcelo', new Date('1983/07/01'), 1500, philosophy);

const mathExam = new Exam(25, Marcos);
const mathWork = new Work(50, Marcos)

const historyExam = new Exam(25, Joao);
const historyWork = new Work(50, Joao)

console.log(Marcos);
console.log(Joao);
console.log(Marcelo);


student01.addEvaluationResult(new EvaluationResult(mathExam, 15))
student01.addEvaluationResult(new EvaluationResult(mathWork, 40))
student01.addEvaluationResult(new EvaluationResult(historyExam, 15))
student01.addEvaluationResult(new EvaluationResult(historyWork, 40))

console.log('Avaliações: ', student01.evaluationsResults);
console.log('Soma das notas: ', student01.sumGrades());
console.log('Média das notas: ', student01.sumAverageGrades());