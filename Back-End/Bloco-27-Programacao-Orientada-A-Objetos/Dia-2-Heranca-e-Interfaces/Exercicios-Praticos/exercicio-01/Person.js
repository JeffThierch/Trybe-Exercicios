"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('The name must contain at least 3 characteres.');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (value) {
        var dateDiff = Math.abs(new Date().getTime() - value.getTime());
        var yearInMs = 31536000000;
        return Math.floor(dateDiff / yearInMs);
    };
    Person.prototype.validateBirthDate = function (value) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('The birthDate cannot be a future date');
        }
        if (Person.getAge(value) > 120) {
            throw new Error('The person must be at least 120 years old');
        }
    };
    return Person;
}());
exports.default = Person;
