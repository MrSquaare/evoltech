import { FC } from "react";

import { productCarts } from "../../constants/samples";
import { CartProductList } from "../products/CartProductList";

export const CartProductPanel: FC = () => {
  return <CartProductList productCarts={productCarts} />;
};
