import { useCallback } from "react";

import { FSM } from "../fsm/FSM";
import { CashRegister } from "../models/CashRegister";
import { FSMEvent } from "../models/FSMEvent";
import { Product } from "../models/Product";
import { useFSM } from "./useFSM";

export const useCashRegister = (cashRegister: CashRegister, fsm: FSM) => {
  const { state: fsmState, send } = useFSM(fsm);

  const handleScanProduct = useCallback(
    (product: Product) => {
      send(new FSMEvent(FSMEvent.Type.PRODUCT_SCANNED), () => {
        cashRegister.currentOrder.cart.addProduct(product);
      });
    },
    [cashRegister, send]
  );

  const handleAddProduct = useCallback(
    (product: Product) => {
      send(new FSMEvent(FSMEvent.Type.PRODUCT_FOUND), () => {
        cashRegister.currentOrder.cart.addProduct(product);
      });
    },
    [cashRegister, send]
  );

  const handleUpdateProductQuantity = useCallback(
    (product: Product, quantity: number) => {
      send(new FSMEvent(FSMEvent.Type.QUANTITY_UPDATED), () => {
        cashRegister.currentOrder.cart.updateProductQuantity(
          product.id,
          quantity
        );
      });
    },
    [cashRegister, send]
  );

  const handleRemoveProduct = useCallback(
    (product: Product) => {
      send(new FSMEvent(FSMEvent.Type.QUANTITY_UPDATED), () => {
        cashRegister.currentOrder.cart.removeProduct(product.id);
      });
    },
    [cashRegister, send]
  );

  return {
    fsmState,
    handleScanProduct,
    handleAddProduct,
    handleUpdateProductQuantity,
    handleRemoveProduct,
  };
};
