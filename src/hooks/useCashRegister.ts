import { useCallback, useContext } from "react";

import { CashRegisterContext } from "../contexts/CashRegisterContext";
import { Product } from "../models/Product";

export const useCashRegister = () => {
  const { cashRegister, setCashRegister } = useContext(CashRegisterContext);

  const handleSetProductCode = useCallback(
    (code: number) => {
      setCashRegister((cashRegister) => {
        cashRegister.pin = code;

        return cashRegister.clone();
      });
    },
    [setCashRegister]
  );

  const handleScanProduct = useCallback(
    (product: Product) => {
      setCashRegister((cashRegister) => {
        cashRegister.currentOrder.cart.addProduct(product);
        cashRegister.pin = 0;

        return cashRegister.clone();
      });
    },
    [setCashRegister]
  );

  const handleAddProduct = useCallback(
    (product: Product) => {
      setCashRegister((cashRegister) => {
        cashRegister.currentOrder.cart.addProduct(product);

        return cashRegister.clone();
      });
    },
    [setCashRegister]
  );

  const handleUpdateProductQuantity = useCallback(
    (product: Product, quantity: number) => {
      setCashRegister((cashRegister) => {
        cashRegister.currentOrder.cart.updateProductQuantity(
          product.id,
          quantity
        );
        cashRegister.pin = 0;

        return cashRegister.clone();
      });
    },
    [setCashRegister]
  );

  const handleRemoveProduct = useCallback(
    (product: Product) => {
      setCashRegister((cashRegister) => {
        cashRegister.currentOrder.cart.removeProduct(product.id);

        return cashRegister.clone();
      });
    },
    [setCashRegister]
  );

  const handleHoldOrder = useCallback(() => {
    setCashRegister((cashRegister) => {
      cashRegister.holdOrder();

      return cashRegister.clone();
    });
  }, [setCashRegister]);

  const handleResumeOrder = useCallback(() => {
    setCashRegister((cashRegister) => {
      cashRegister.resumeOrder();

      return cashRegister.clone();
    });
  }, [setCashRegister]);

  const handleResetOrder = useCallback(() => {
    setCashRegister((cashRegister) => {
      cashRegister.resetOrder();

      return cashRegister.clone();
    });
  }, [setCashRegister]);

  return {
    cashRegister,
    handleSetProductCode,
    handleScanProduct,
    handleAddProduct,
    handleUpdateProductQuantity,
    handleRemoveProduct,
    handleHoldOrder,
    handleResumeOrder,
    handleResetOrder,
  };
};
