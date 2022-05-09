import Person from './Person';

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[]= [];

  constructor(person: Person) {
    super(person.name, person.birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if(value.length < 16) {
      throw new Error('The enrollment should have at least 16 characteres.')
    }

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('The student only can have 4 exams grades');
    }

    this._examsGrades = value;
  }


  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('The student only can have 2 works grades');
    }

    this._worksGrades = value;
  }

  sumGrades(): number {
    const allGrades = [...this.examsGrades, ...this.worksGrades];

    return allGrades.reduce((prevValue, actualValue) => (prevValue + actualValue), 0);
  }

  sumAverageGrade(): number {
    const allGrades = this.examsGrades.length + this.worksGrades.length;

    return (this.sumGrades() / allGrades);
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}