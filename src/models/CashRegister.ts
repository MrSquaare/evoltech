import { Order } from "./Order";
import { Payment } from "./Payment";

export class CashRegister {
  private _orders: Order[] = new Array(2).fill(new Order());
  private _currentOrderId: number = 0;
  private _pin: number = 0;

  get currentOrder() {
    return this._orders[this._currentOrderId];
  }

  pauseOrder() {
    this._currentOrderId = 1;
  }

  resumeOrder() {
    this._currentOrderId = 0;
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
