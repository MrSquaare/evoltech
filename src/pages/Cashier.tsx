import "../styles/app.scss";

import { Box, Container, Paper } from "@mui/material";
import React, { FC, useState } from "react";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import PayementPanel from "../components/cashier/PayementPanel";
import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import ProductCodePanel from "../components/cashier/ProductCodePanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

const CashierPage: FC = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
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
        <Container
          maxWidth={"sm"}
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              justifyContent: "space-between",
              width: "100%",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              marginTop: "1rem",
              padding: "20px",
            }}
          >
            <Box
              className="digit-container-panel"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <ProductCodePanel />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PayementPanel />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CashierPage;
