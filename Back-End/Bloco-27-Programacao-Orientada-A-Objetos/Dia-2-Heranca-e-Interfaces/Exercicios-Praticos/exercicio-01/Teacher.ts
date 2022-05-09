import Person from './Person';
import Employee from './Employee';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _registration: string;

  constructor(
    teacher: Person,
    private _subject: Subject,
    private _salary: number,
    private _admissionDate: Date
  ){
    super(teacher.name, teacher.birthDate) 
    this._registration = this.generateRegistration()
  }

  get subject(): Subject {
    return this._subject
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if(value < 0) {
      throw new Error('The salary cannot be negative.')
    }

    this._salary = value;
  }

  get registration(): string {
    return this._registration
  }

  set registration(value: string) {
    if(value.length < 16) {
      throw new Error('The registratation must be at least 16 characteres long.');
    }

    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate
  }

  set admissionDate(value: Date) {
    if(value.getTime() > new Date().getTime()) {
      throw new Error('The admission date cannot be a future date.')
    }

    this.admissionDate = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `EMP${randomStr}`;
  }
}