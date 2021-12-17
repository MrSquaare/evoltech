import React, { FunctionComponent } from "react";

import WaitingPanel from "../components/cashier/WaitingPanel";

interface OwnProps {}

type Props = OwnProps;

const Cashier: FunctionComponent<Props> = (props) => {
  return (
    <>
      <WaitingPanel />
    </>
  );
};

export default Cashier;
