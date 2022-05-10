"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Employee_1 = require("./Employee");
class Teacher extends Employee_1.Employee {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate, salary);
        this._subject = subject;
        this.enrollment = this.generateEnrollment();
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    generateEnrollment() {
        const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
        return `PRF${randomStr}`;
    }
}
exports.Teacher = Teacher;
