import { Box } from "@mui/material";
import React, { FC } from "react";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import PayementPanel from "../components/cashier/PayementPanel";
import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

const Cashier: FC = (props) => {
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
            <ProductCardPanel />
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

export default Cashier;
