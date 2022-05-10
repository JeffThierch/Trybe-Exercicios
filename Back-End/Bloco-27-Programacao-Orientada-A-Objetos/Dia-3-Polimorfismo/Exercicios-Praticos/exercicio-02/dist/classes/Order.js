"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderItem_1 = require("./OrderItem");
class Order {
    constructor(client, items, paymentMethod, discount) {
        this._discount = 0;
        this._id = Math.trunc(Date.now() * (Math.random() + 1));
        this._createdAt = new Date();
        this._client = client;
        this._items = items;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    get id() {
        return this._id;
    }
    get createdAt() {
        return this._createdAt;
    }
    set id(value) {
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    set paymentMethod(value) {
        if (!["Credit Card", "Money", "Voucher"].includes(value)) {
            throw new Error('Invalid payment method.');
        }
        this._paymentMethod = value;
    }
    get discount() {
        return this._discount;
    }
    set discount(value) {
        if (value < 0) {
            throw new Error('The discount cannot be a negative value.');
        }
        this._discount = value;
    }
    get items() {
        return this._items;
    }
    set items(value) {
        if (OrderItem_1.OrderItem.length === 0) {
            throw new Error('The order shoud have at least one item.');
        }
        this._items = value;
    }
    calcOrderTotal() {
        return this.items.reduce((prevValue, actualValue) => (prevValue + actualValue.price), 0);
    }
    calcDiscountTotal() {
        return (this.calcOrderTotal() * this.discount);
    }
    calcTotalWithDiscount() {
        return this.calcOrderTotal() - this.calcDiscountTotal();
    }
}
exports.Order = Order;
