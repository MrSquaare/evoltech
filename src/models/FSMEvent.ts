export class FSMEvent {
  constructor(private _type: FSMEvent.Type) {}

  get type() {
    return this._type;
  }
}

export namespace FSMEvent {
  export const enum Type {
    PRODUCT_SCANNED = "PRODUCT_SCANNED",
    NUMBER_PRESSED = "NUMBER_PRESSED",
    PRODUCT_CODE_ENTERED = "PRODUCT_CODE_ENTERED",
    PRODUCT_ADDED = "PRODUCT_FOUND",
    QUANTITY_ENTERED = "QUANTITY_ENTERED",
    RETURN_PRESSED = "RETURN_PRESSED",
    PAY_PRESSED = "PAY_PRESSED",
    PAY_ENTERED = "AMOUNT_ENTERED",
    PAY_COMPLETED = "PAY_COMPLETED",
  }
}
