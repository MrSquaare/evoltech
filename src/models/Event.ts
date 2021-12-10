import { Product } from "./Product";

export class Event<P = any> {
  constructor(private _type: Event.Type, private _payload?: P) {}

  get type() {
    return this._type;
  }

  get payload() {
    return this._payload;
  }
}

export namespace Event {
  export const enum Type {
    PRODUCT_SCANNED = "PRODUCT_SCANNED",
    NUMBER_PRESSED = "NUMBER_PRESSED",
    PRODUCT_CODE_ENTERED = "PRODUCT_CODE_ENTERED",
    PRODUCT_FOUND = "PRODUCT_FOUND",
    QUANTITY_ENTERED = "QUANTITY_ENTERED",
    QUANTITY_UPDATED = "QUANTITY_UPDATED",
    RETURN_PRESSED = "RETURN_PRESSED",
    PAY_PRESSED = "PAY_PRESSED",
    PAY_ENTERED = "AMOUNT_ENTERED",
    PAY_COMPLETED = "PAY_COMPLETED",
  }
}

export type ProductScannedPayload = {
  product: Product;
};

export type QuantityEnteredPayload = {
  productId: string;
  quantity: number;
};

export type ProductCodeEnteredPayload = {
  productCode: string;
};

export type ProductFoundPayload = {
  product: Product;
};
