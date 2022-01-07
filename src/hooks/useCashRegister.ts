import { useCallback, useContext } from "react";

import { CashRegisterContext } from "../contexts/CashRegisterContext";
import { FSMEvent } from "../models/FSMEvent";
import { Product } from "../models/Product";
import { useFSM } from "./useFSM";

export const useCashRegister = () => {
  const { fsm, cashRegister, setCashRegister } =
    useContext(CashRegisterContext);
  const { send } = useFSM(fsm);

  const handleScanProduct = useCallback(
    (product: Product) => {
      send(new FSMEvent(FSMEvent.Type.PRODUCT_SCANNED), () => {
        cashRegister.currentOrder.cart.addProduct(product);

        setCashRegister(cashRegister.clone());
      });
    },
    [cashRegister, setCashRegister, send]
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
    cashRegister,
    handleScanProduct,
    handleAddProduct,
    handleUpdateProductQuantity,
    handleRemoveProduct,
  };
};
