import { Cart } from "./Cart";
import { Payment } from "./Payment";

export class Order {
  private _cart: Cart = new Cart();
  private _payments: Payment[] = [];
  private _state: Order.State = Order.State.PENDING;

  get cart(): Cart {
    return this._cart;
  }

  set state(state: Order.State) {
    this._state = state;
  }

  addPayment(payment: Payment) {
    this._payments.push(payment);
  }

  getTotalPaid(): number {
    return this._payments.reduce((total, payment) => total + payment.price, 0);
  }
}

export namespace Order {
  export enum State {
    PENDING,
    PAID,
    CANCELLED,
  }
}
