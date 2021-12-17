import { FC } from "react";

import { productCards } from "../../constants/samples";
import { ProductCardList } from "../products/ProductCardList";

export const ProductCardPanel: FC = () => {
  return <ProductCardList productCards={productCards} />;
};
