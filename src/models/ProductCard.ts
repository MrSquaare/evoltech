import { Product } from "./Product";

export class ProductCard {
  constructor(private _reference: Product, private _quantity: number) {}

  get reference() {
    return this._reference;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  getTotalPrice(): number {
    return this._reference.price * this._quantity;
  }
}
