import { Person } from "./abstract/Person";
import { Order } from "./Order";

export class OrderRepository {
  private _orders: Order[] = [];

  addOrder(order: Order): void {
    this._orders.push(order);
  }
  removeOrder(order: Order): boolean {
    const orderIndex = this.findOrderIndexById(order.id);

    const deletedOrder = this._orders.splice(orderIndex, 1);

    if(deletedOrder.length === 0) {
      return false;
    }

    return true;
  }

  findOrderIndexById(id: number) {
    const orderIndex = this._orders.findIndex((order) => order.id === id);

    if(orderIndex < 0) {
      throw new Error('Order dont exist.')
    }

    return orderIndex
  }

  listByClient(client: Person): Order[] {
    return this._orders.filter((order) => order.client === client);
  }

  listBySortedValue(sort: string): Order[] {
    if(!['greater', 'lesser'].includes(sort)) {
      throw new Error('Invalid sort value.')
    }

    if (sort === 'menor') {
      return this._orders.sort(
        (orderA, orderB) => {
          if (orderA.calcTotalWithDiscount() > orderB.calcTotalWithDiscount()) return 1;

          if (orderA.calcTotalWithDiscount() < orderB.calcTotalWithDiscount()) return -1;

          return 0;
        },
      );
    }

    return this._orders.sort(
      (orderA, orderB) => {
        if (orderA.calcTotalWithDiscount() > orderB.calcTotalWithDiscount()) return -1;

        if (orderA.calcTotalWithDiscount() < orderB.calcTotalWithDiscount()) return 1;

        return 0;
      },
    );
  }
}