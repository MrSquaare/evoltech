import { Box, Container } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import { CartProductPanel } from "../components/cashier/CartProductPanel";
import CashierOpenModal from "../components/cashier/CashierOpenModal";
import PayementPanel from "../components/cashier/PayementPanel";
import ProductCodePanel from "../components/cashier/ProductCodePanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

const CashierPage: FC = (props) => {
  const navigate = useNavigate();
  const [isCashierOpen, setCashierOpen] = useState(false);
  const handleOpenCashier = useCallback(() => {
    setCashierOpen(true);
  }, []);
  const handleCloseCashier = useCallback(() => {
    setCashierOpen(false);
  }, []);
  const handleDisconnect = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar
        cashier={cashier}
        onOpenCashier={handleOpenCashier}
        onDisconnect={handleDisconnect}
      />
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
      <CashierOpenModal open={isCashierOpen} handleClose={handleCloseCashier} />
    </Box>
  );
};

export default CashierPage;
