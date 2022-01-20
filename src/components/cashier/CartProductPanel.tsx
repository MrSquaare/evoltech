import { FC, useMemo } from "react";

import { useCashRegister } from "../../hooks/useCashRegister";
import { CartProductList } from "../products/CartProductList";

export const CartProductPanel: FC = () => {
  const { cashRegister, handleUpdateProductQuantity, handleRemoveProduct } =
    useCashRegister();

  const productCarts = useMemo(() => {
    return Array.from(
      cashRegister.currentOrder.cart.products,
      ([_, productCard]) => productCard
    );
  }, [cashRegister]);

  return (
    <CartProductList
      productCarts={productCarts}
      onQuantityChange={(productCart, quantity) =>
        handleUpdateProductQuantity(productCart.reference.id, quantity)
      }
      onDelete={(productCart) => {
        handleRemoveProduct(productCart.reference.id);
      }}
    />
  );
};
