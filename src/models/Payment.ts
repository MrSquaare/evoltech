export class Payment {
  constructor(private _price: number) {}

  get price() {
    return this._price;
  }

  toJSON() {
    return {
      price: this._price,
    };
  }
}
