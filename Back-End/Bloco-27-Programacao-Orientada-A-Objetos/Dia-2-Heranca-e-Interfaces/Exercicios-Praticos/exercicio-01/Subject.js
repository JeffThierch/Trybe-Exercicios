"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(_name) {
        this._name = _name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            if (value.length < 3) {
                throw new Error('The name must be at least 3 characters long');
            }
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return Subject;
}());
exports.default = Subject;
