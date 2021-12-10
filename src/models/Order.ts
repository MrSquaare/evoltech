import { Card } from "./Card";
import { Payment } from "./Payment";

export class Order {
  private _card: Card = new Card();
  private _payments: Payment[] = [];
  private _state: Order.State = Order.State.PENDING;

  get card(): Card {
    return this._card;
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
