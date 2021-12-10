import { Cashier } from "../models/Cashier";
import {
  Event,
  ProductCodeEnteredPayload,
  ProductFoundPayload,
  ProductScannedPayload,
  QuantityEnteredPayload,
} from "../models/Event";
import { State } from "../models/State";
import { ProductRepository } from "../repositories/product";

export class CashierManager {
  constructor(
    private _state: State,
    private _cashier: Cashier,
    private _productRepository: ProductRepository
  ) {}

  get state() {
    return this._state;
  }

  run(event: Event): void {
    if (
      this.checkState(
        State.get(State.Type.WAIT_PRODUCT_SCAN),
        State.get(State.Type.WAIT_PRODUCT_QUANTITY),
        event.type === Event.Type.PRODUCT_SCANNED
      )
    ) {
      const { product } = event.payload as ProductScannedPayload;

      this._cashier.currentOrder.card.addProduct(product);
    }

    if (
      this.checkState(
        State.get(State.Type.WAIT_PRODUCT_QUANTITY),
        State.get(State.Type.UPDATE_PRODUCT_QUANTITY),
        event.type === Event.Type.QUANTITY_ENTERED
      )
    ) {
      const { productId, quantity } = event.payload as QuantityEnteredPayload;
      const isUpdated = this._cashier.currentOrder.card.updateProductQuantity(
        productId,
        quantity
      );

      if (isUpdated) {
        this.run(new Event(Event.Type.QUANTITY_UPDATED));
      }
    }

    this.checkState(
      State.get(State.Type.UPDATE_PRODUCT_QUANTITY),
      State.get(State.Type.WAIT_PRODUCT_SCAN),
      event.type === Event.Type.QUANTITY_UPDATED
    );

    if (
      this.checkState(
        State.get(State.Type.WAIT_PRODUCT_CODE),
        State.get(State.Type.FIND_PRODUCT),
        event.type === Event.Type.PRODUCT_CODE_ENTERED
      )
    ) {
      const { productCode } = event.payload as ProductCodeEnteredPayload;
      const product = this._productRepository.findProduct(productCode);

      if (product) {
        this.run(new Event(Event.Type.PRODUCT_FOUND, { product }));
      }
    }

    if (
      this.checkState(
        State.get(State.Type.FIND_PRODUCT),
        State.get(State.Type.WAIT_PRODUCT_QUANTITY),
        event.type === Event.Type.PRODUCT_FOUND
      )
    ) {
      const { product } = event.payload as ProductFoundPayload;

      this._cashier.currentOrder.card.addProduct(product);
    }
  }

  private checkState(
    fromState: State,
    toState: State,
    condition: boolean
  ): boolean {
    const isValid = this._state === fromState && condition;

    if (isValid) {
      this._state = toState;
    }

    return isValid;
  }
}
