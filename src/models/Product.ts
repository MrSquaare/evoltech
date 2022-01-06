export class Product {
  constructor(
    private _id: string,
    private _name: string,
    private _description: string,
    private _code: string,
    private _price: number
  ) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get code() {
    return this._code;
  }

  get price() {
    return this._price;
  }
}
