import { Box, Container } from "@mui/material";
import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import { CartProductPanel } from "../components/cashier/CartProductPanel";
import CashierOpenModal from "../components/cashier/CashierOpenModal";
import PayementPanel from "../components/cashier/PayementPanel";
import ProductCodePanel from "../components/cashier/ProductCodePanel";
import ProductModal from "../components/cashier/ProductModal";
import TopBar from "../components/layout/TopBar";
import { cashier, products } from "../constants/samples";
import { CashRegisterProvider } from "../contexts/CashRegisterContext";
import { FSMProvider } from "../contexts/FSMContext";
import { ProductRepositoryProvider } from "../contexts/ProductRepositoryContext";
import { FSM } from "../fsm/FSM";
import { useCashRegister } from "../hooks/useCashRegister";
import { useProductRepository } from "../hooks/useProductRepository";
import { FSMState } from "../models/FSMState";
import { CashRegisterRepository } from "../repositories/cashRegister";
import { ProductRepository } from "../repositories/product";

const CashierPage: FC = () => {
  const navigate = useNavigate();
  const [isCashierOpen, setCashierOpen] = useState(false);
  const [isProductOpen, setProductOpen] = useState(false);

  const { scanProduct } = useProductRepository();
  const { cashRegister, handleScanProduct } = useCashRegister();

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

  useEffect(() => {
    return () => {
      CashRegisterRepository.saveCashRegister(cashRegister);
    };
  }, [cashRegister]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <TopBar
        cashier={cashier}
        onScan={() => handleScanProduct(scanProduct())}
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
              width: "100%",
              marginTop: "16px",
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
  const productRepository = useMemo(() => new ProductRepository(products), []);
  const initState = useMemo(
    () => FSMState.get(FSMState.Type.WAIT_PRODUCT_SCAN),
    []
  );
  const fsm = useMemo(() => new FSM(initState), [initState]);
  const cashRegister = useMemo(
    () => CashRegisterRepository.loadCashRegister(productRepository),
    [productRepository]
  );

  return (
    <ProductRepositoryProvider productRepository={productRepository}>
      <FSMProvider fsm={fsm}>
        <CashRegisterProvider cashRegister={cashRegister}>
          <CashierPage />
        </CashRegisterProvider>
      </FSMProvider>
    </ProductRepositoryProvider>
  );
};

export default CashierPageWithProviders;
