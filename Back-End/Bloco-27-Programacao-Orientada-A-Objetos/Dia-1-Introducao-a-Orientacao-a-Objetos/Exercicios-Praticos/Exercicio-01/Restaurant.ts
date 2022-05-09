class Client {
  constructor(public name: string) {}
}

type PaymentForm = "Credit Card" | "Money" | "Debit Card"

class Order {
  
  constructor(
    public client: Client,
    public consumedItems: Item[],
    public paymentForm: PaymentForm,
    public discountPorcent?: number,
  ) {}

  calcOrderTotal() {
    return this.consumedItems.reduce((prevValue, actualValue) => (prevValue + actualValue.price), 0);
  }

  calcDiscountTotal() {
    if(!this.discountPorcent) {
      return 0
    }
    
    return (this.calcOrderTotal() * this.discountPorcent)
  }

  calcTotalWithDiscount() {
    return this.calcOrderTotal() - this.calcDiscountTotal();
  }
}

class Item {
  constructor(public name: string, public price: number) {}
}