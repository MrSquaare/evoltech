export class FSMState {
  private constructor(private _type: FSMState.Type) {}

  get type() {
    return this._type;
  }

  private static _instances: Map<string, FSMState> = new Map();

  static get(type: FSMState.Type): FSMState {
    if (!this._instances.has(type)) {
      this._instances.set(type, new FSMState(type));
    }

    return this._instances.get(type) as FSMState;
  }
}

export namespace FSMState {
  export const enum Type {
    WAIT_PRODUCT_SCAN = "WAIT_PRODUCT_SCAN",
    WAIT_PRODUCT_CODE = "WAIT_PRODUCT_CODE",
    WAIT_PRODUCT_QUANTITY = "WAIT_PRODUCT_QUANTITY",
    FIND_PRODUCT = "FIND_PRODUCT",
    UPDATE_PRODUCT_QUANTITY = "UPDATE_PRODUCT_QUANTITY",
    ERROR_UNKNOWN_PRODUCT = "ERROR_UNKNOWN_PRODUCT",
    WAIT_PAYMENT = "WAIT_PAYMENT",
    PAYMENT_SUCCESS = "PAYMENT_SUCCESS",
    PAYMENT_FAILURE = "PAYMENT_FAILURE",
  }
}
