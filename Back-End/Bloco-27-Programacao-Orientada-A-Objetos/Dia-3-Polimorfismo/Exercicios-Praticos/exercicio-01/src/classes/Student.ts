import { Enrollable } from './Enrollable';
import { EvaluationResult } from './EvaluationResult';
import { Person } from './Person';

export class Student extends Person implements Enrollable{
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = []
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

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults
  }

  sumGrades(): number {
    return this.evaluationsResults.reduce((prevValue, actualValue) => (prevValue + actualValue.score), 0);
  }

  sumAverageGrades(): number {
    const gradesQuantity = this.evaluationsResults.length

    return (this.sumGrades() / gradesQuantity);
  }

  addEvaluationResult(evaluation: EvaluationResult): void {
    this._evaluationsResults.push(evaluation);
  }

  generateEnrollment() {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}