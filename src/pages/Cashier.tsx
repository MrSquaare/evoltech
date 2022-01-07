import { Box, Container } from "@mui/material";
import React, { FC, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import { CartProductPanel } from "../components/cashier/CartProductPanel";
import CashierOpenModal from "../components/cashier/CashierOpenModal";
import PayementPanel from "../components/cashier/PayementPanel";
import ProductCodePanel from "../components/cashier/ProductCodePanel";
import ProductModal from "../components/cashier/ProductModal";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";
import { CashRegisterProvider } from "../contexts/CashRegisterContext";
import { FSMProvider } from "../contexts/FSMContext";
import { FSM } from "../fsm/FSM";
import { CashRegister } from "../models/CashRegister";
import { FSMState } from "../models/FSMState";

const CashierPage: FC = () => {
  const navigate = useNavigate();
  const [isCashierOpen, setCashierOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);
  const handleOpenCashier = useCallback(() => {
    setCashierOpen(true);
  }, []);
  const handleCloseCashier = useCallback(() => {
    setCashierOpen(false);
  }, []);
  const handleOpenProduct = useCallback(() => {
    setProductOpen(true);
  }, []);
  const handleCloseProduct = useCallback(() => {
    setProductOpen(false);
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
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              marginBottom: "1rem",
            }}
          >
            <CartProductPanel />
          </Box>
          <ActionsPanel />
        </Box>
        <Container
          maxWidth={"sm"}
          sx={{
            flex: 1,
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
              <ProductCodePanel handleOpenProduct={handleOpenProduct} />
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
      <ProductModal visible={isProductOpen} handleClose={handleCloseProduct} />
    </Box>
  );
};

const CashierPageWithProviders = () => {
  const initState = useMemo(
    () => FSMState.get(FSMState.Type.WAIT_PRODUCT_SCAN),
    []
  );
  const fsm = useMemo(() => new FSM(initState), [initState]);
  const cashRegister = useMemo(() => new CashRegister(), []);

  return (
    <FSMProvider fsm={fsm}>
      <CashRegisterProvider cashRegister={cashRegister}>
        <CashierPage />
      </CashRegisterProvider>
    </FSMProvider>
  );
};

export default CashierPageWithProviders;
