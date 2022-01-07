import { Order } from "./Order";
import { Payment } from "./Payment";

const generateOrders = (quantity: number): Order[] => {
  const orders = [];

  for (let i = 0; i < quantity; i++) {
    orders.push(new Order());
  }

  return orders;
};

export class CashRegister {
  private _orders: Order[] = generateOrders(2);
  private _currentOrderId: number = 0;
  private _pin: number = 0;

  get currentOrder() {
    return this._orders[this._currentOrderId];
  }

  get isHolding() {
    return this._currentOrderId === 1;
  }

  holdOrder() {
    this._currentOrderId = 1;
  }

  resumeOrder() {
    this._currentOrderId = 0;
  }

  resetOrder() {
    this._orders[this._currentOrderId] = new Order();
  }

  pay(payment: Payment): boolean {
    this.currentOrder.addPayment(payment);

    if (
      this.currentOrder.getTotalPaid() >= this.currentOrder.cart.getTotalPrice()
    ) {
      this.currentOrder.state = Order.State.PAID;

      return true;
    }

    return false;
  }

  get pin() {
    return this._pin;
  }

  set pin(value: number) {
    this._pin = value;
  }

  clone(): CashRegister {
    const clonedObj = Object.assign({}, this);

    Object.setPrototypeOf(clonedObj, Object.getPrototypeOf(this));

    return clonedObj;
  }
}
