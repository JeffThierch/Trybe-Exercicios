class Client {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve possuir no minimo 3 caracteres')
    }

    this._name = value;
  }
}

type PaymentForm = "Credit Card" | "Money" | "Debit Card"

class Order {
  
  constructor(
    private _client: Client,
    private _consumedItems: Item[] = [],
    private _paymentForm: PaymentForm,
    private _discount: number = 0,
  ) {}

  get client(): Client {
    return this._client;
  }

  set client(value: Client) {
    this._client = value
  }

  get consumedItems(): Item[] {
    return this._consumedItems;
  }

  set consumedItems(value: Item[]) {
    if(value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.');
    }

    this.consumedItems = value;
  }

  get paymentForm(): PaymentForm {
    return this._paymentForm;
  }

  set paymentForm(value: PaymentForm) {
    this._paymentForm = value
  }

  get discount(): number {
    return this._discount;
  }

  set discount(value: number) {
    if (value < 0) {
      throw new Error('O disconto nao pode ser uma valor negativo.');
    }

    this._discount = value;
  }

  calcOrderTotal() {
    return this.consumedItems.reduce((prevValue, actualValue) => (prevValue + actualValue.price), 0);
  }

  calcDiscountTotal() {
    return (this.calcOrderTotal() * this.discount)
  }

  calcTotalWithDiscount() {
    return this.calcOrderTotal() - this.calcDiscountTotal();
  }
}

class Item {
  constructor(private _name: string, private _price: number) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve possuir no minimo 3 caracteres');
    }

    this._name = value;
  }

  get price(): number {
    return this._price
  }

  set price(value: number) {
    if(value < 0) {
      throw new Error('O preço deve ser positivo');
    }

    this._price = value;
  }
}