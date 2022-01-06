import { Box } from "@mui/material";
import React, { FC } from "react";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import { CartProductPanel } from "../components/cashier/CartProductPanel";
import PayementPanel from "../components/cashier/PayementPanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

const CashierPage: FC = (props) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar cashier={cashier} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Box sx={{ flexGrow: 1, marginBottom: "1rem" }}>
            <CartProductPanel />
          </Box>
          <ActionsPanel />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <PayementPanel />
        </Box>
      </Box>
    </Box>
  );
};

export default CashierPage;
