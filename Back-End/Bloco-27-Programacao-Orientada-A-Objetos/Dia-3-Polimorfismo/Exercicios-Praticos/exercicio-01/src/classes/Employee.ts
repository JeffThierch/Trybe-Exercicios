import { Person } from "./abstract/Person";
import { Enrollable } from "../interfaces/Enrollable";

export class Employee extends Person implements Enrollable{
  private _enrollment: string = String();
  private _admissionDate: Date;
  constructor(name: string, birthDate: Date, private _salary: number) {
    super(name, birthDate);

    this.salary = _salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment();
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

  get enrollment(): string {
    return this._enrollment
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('The registratation must be at least 16 characteres long.');
    }

    this._enrollment = value;
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

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `EMP${randomStr}`;
  }
}