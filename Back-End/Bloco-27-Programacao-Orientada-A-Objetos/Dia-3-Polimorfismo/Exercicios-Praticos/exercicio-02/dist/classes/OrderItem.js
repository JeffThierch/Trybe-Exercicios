"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3) {
            throw new Error('The name should contain at least 3 characteres');
        }
        this._name = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        if (value < 0) {
            throw new Error('The value cannot be negative.');
        }
        this._price = value;
    }
}
exports.OrderItem = OrderItem;
