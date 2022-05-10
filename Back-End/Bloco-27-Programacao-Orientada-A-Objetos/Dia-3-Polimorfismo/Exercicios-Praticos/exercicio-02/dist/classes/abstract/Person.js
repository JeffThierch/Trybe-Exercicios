"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
        this.name = _name;
        this.birthDate = _birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('The name must contain at least 3 characteres.');
        }
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        this.validateBirthDate(value);
        this._birthDate = value;
    }
    static getAge(value) {
        const dateDiff = Math.abs(new Date().getTime() - value.getTime());
        const yearInMs = 31536000000;
        return Math.floor(dateDiff / yearInMs);
    }
    validateBirthDate(value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('The birthDate cannot be a future date');
        }
        if (Person.getAge(value) > 120) {
            throw new Error('The person must be at least 120 years old');
        }
    }
}
exports.Person = Person;
