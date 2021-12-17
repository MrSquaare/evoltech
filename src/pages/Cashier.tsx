import React, { FunctionComponent } from "react";

import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

interface OwnProps {}

type Props = OwnProps;

const Cashier: FunctionComponent<Props> = (props) => {
  return (
    <>
      <TopBar cashier={cashier} />
      <ProductCardPanel />
    </>
  );
};

export default Cashier;
