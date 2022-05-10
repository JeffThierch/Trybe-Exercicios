export class OrderItem {
  constructor(private _name: string, private _price: number) {}

  get name(): string {
    return this._name
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('The name should contain at least 3 characteres')
    }

    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if(value < 0) {
      throw new Error('The value cannot be negative.')
    }

    this._price = value;
  }
}