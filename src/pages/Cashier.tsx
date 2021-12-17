import React, { FunctionComponent } from "react";

import PayementPanel from "../components/cashier/PayementPanel";
import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import ProductCodePanel from "../components/cashier/ProductCodePanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

interface OwnProps {}

type Props = OwnProps;

const Cashier: FunctionComponent<Props> = (props) => {
  return (
    <>
      <TopBar cashier={cashier} />
      <ProductCardPanel />
      <PayementPanel />
      <ProductCodePanel />
    </>
  );
};

export default Cashier;
