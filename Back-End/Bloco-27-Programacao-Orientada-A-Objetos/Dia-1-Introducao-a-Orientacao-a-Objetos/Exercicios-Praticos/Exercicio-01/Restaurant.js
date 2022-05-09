"use strict";
class Client {
    constructor(name) {
        this.name = name;
    }
}
class Order {
    constructor(client, consumedItems, paymentForm, discountPorcent) {
        this.client = client;
        this.consumedItems = consumedItems;
        this.paymentForm = paymentForm;
        this.discountPorcent = discountPorcent;
    }
    calcOrderTotal() {
        return this.consumedItems.reduce((prevValue, actualValue) => (prevValue + actualValue.price), 0);
    }
    calcDiscountTotal() {
        if (!this.discountPorcent) {
            return 0;
        }
        return (this.calcOrderTotal() * this.discountPorcent);
    }
    calcTotalWithDiscount() {
        return this.calcOrderTotal() - this.calcDiscountTotal();
    }
}
class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
