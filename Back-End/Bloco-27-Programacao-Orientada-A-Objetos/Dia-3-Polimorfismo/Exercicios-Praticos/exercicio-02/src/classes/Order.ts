import { PaymentForm } from "../types/PaymentForm";
import { Person } from "./abstract/Person";
import { OrderItem } from "./OrderItem";

export class Order {
  private _id: number;
  private _createdAt: Date;
  private _client: Person;
  private _items: OrderItem[];
  private _paymentMethod: PaymentForm
  private _discount: number = 0

  constructor(
    client: Person, 
    items: OrderItem[], 
    paymentMethod: PaymentForm, 
    discount: number) {
      this._id = Math.trunc(Date.now() * (Math.random() + 1));
      this._createdAt = new Date();
      this._client = client;
      this._items = items;
      this._paymentMethod = paymentMethod;
      this._discount = discount;
  }

  get id(): number {
    return this._id
  }

  get createdAt(): Date {
    return this._createdAt
  }

  set id(value: number) {
    
  }

  get client(): Person {
    return this._client;
  }

  set client(value: Person) {
    this._client = value
  }

  get paymentMethod(): PaymentForm {
    return this._paymentMethod;
  }

  set paymentMethod(value: PaymentForm) {
    if(!["Credit Card", "Money", "Voucher"].includes(value)) {
      throw new Error('Invalid payment method.')
    }
    this._paymentMethod = value
  }
  
  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('The discount cannot be a negative value.');
    }

    this._discount = value;
  }

  get items(): OrderItem[] {
    return this._items;
  }

  set items(value: OrderItem[]) {
    if(OrderItem.length === 0) {
      throw new Error('The order shoud have at least one item.')
    }

    this._items = value;
  }

  calcOrderTotal() {
    return this.items.reduce((prevValue, actualValue) => (prevValue + actualValue.price), 0);
  }

  calcDiscountTotal() {
    return (this.calcOrderTotal() * this.discount)
  }

  calcTotalWithDiscount() {
    return this.calcOrderTotal() - this.calcDiscountTotal();
  }
}