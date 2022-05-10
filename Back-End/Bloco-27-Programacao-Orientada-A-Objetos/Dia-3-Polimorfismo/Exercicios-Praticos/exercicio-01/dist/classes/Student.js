"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./abstract/Person");
class Student extends Person_1.Person {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._evaluationsResults = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error('The enrollment should have at least 16 characteres.');
        }
        this._enrollment = value;
    }
    get evaluationsResults() {
        return this._evaluationsResults;
    }
    sumGrades() {
        return this.evaluationsResults.reduce((prevValue, actualValue) => (prevValue + actualValue.score), 0);
    }
    sumAverageGrades() {
        const gradesQuantity = this.evaluationsResults.length;
        return (this.sumGrades() / gradesQuantity);
    }
    addEvaluationResult(evaluation) {
        this._evaluationsResults.push(evaluation);
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `STU${randomStr}`;
    }
}
exports.Student = Student;
