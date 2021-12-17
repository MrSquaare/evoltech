export class Payment {
  constructor(private _price: number) {}

  get price() {
    return this._price;
  }
}
