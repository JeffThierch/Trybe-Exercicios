"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
class OrderRepository {
    constructor() {
        this._orders = [];
    }
    addOrder(order) {
        this._orders.push(order);
    }
    removeOrder(order) {
        const orderIndex = this.findOrderIndexById(order.id);
        const deletedOrder = this._orders.splice(orderIndex, 1);
        if (deletedOrder.length === 0) {
            return false;
        }
        return true;
    }
    findOrderIndexById(id) {
        const orderIndex = this._orders.findIndex((order) => order.id === id);
        if (orderIndex < 0) {
            throw new Error('Order dont exist.');
        }
        return orderIndex;
    }
    listByClient(client) {
        return this._orders.filter((order) => order.client === client);
    }
    listBySortedValue(sort) {
        if (!['greater', 'lesser'].includes(sort)) {
            throw new Error('Invalid sort value.');
        }
        if (sort === 'menor') {
            return this._orders.sort((orderA, orderB) => {
                if (orderA.calcTotalWithDiscount() > orderB.calcTotalWithDiscount())
                    return 1;
                if (orderA.calcTotalWithDiscount() < orderB.calcTotalWithDiscount())
                    return -1;
                return 0;
            });
        }
        return this._orders.sort((orderA, orderB) => {
            if (orderA.calcTotalWithDiscount() > orderB.calcTotalWithDiscount())
                return -1;
            if (orderA.calcTotalWithDiscount() < orderB.calcTotalWithDiscount())
                return 1;
            return 0;
        });
    }
}
exports.OrderRepository = OrderRepository;
