"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('O nome deve possuir no minimo 3 caracteres');
        }
        this._name = value;
    }
}
exports.Client = Client;
