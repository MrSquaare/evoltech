import { FC, useMemo } from "react";

import { CashRegister } from "../../models/CashRegister";
import { CartProductList } from "../products/CartProductList";

type Props = {
  cashRegister: CashRegister;
};

export const CartProductPanel: FC<Props> = ({ cashRegister }) => {
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
        console.log(productCart + " changed to " + quantity)
      }
    />
  );
};
