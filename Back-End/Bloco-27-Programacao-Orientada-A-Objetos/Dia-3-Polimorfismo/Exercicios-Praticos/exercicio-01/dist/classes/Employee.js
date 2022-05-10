"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./abstract/Person");
class Employee extends Person_1.Person {
    constructor(name, birthDate, _salary) {
        super(name, birthDate);
        this._salary = _salary;
        this._enrollment = String();
        this.salary = _salary;
        this._admissionDate = new Date();
        this.enrollment = this.generateEnrollment();
    }
    get salary() {
        return this._salary;
    }
    set salary(value) {
        if (value < 0) {
            throw new Error('The salary cannot be negative.');
        }
        this._salary = value;
    }
    get enrollment() {
        return this._enrollment;
    }
    set enrollment(value) {
        if (value.length < 16) {
            throw new Error('The registratation must be at least 16 characteres long.');
        }
        this._enrollment = value;
    }
    get admissionDate() {
        return this._admissionDate;
    }
    set admissionDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('The admission date cannot be a future date.');
        }
        this.admissionDate = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `EMP${randomStr}`;
    }
}
exports.Employee = Employee;
