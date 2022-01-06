import { Box } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import { CartProductPanel } from "../components/cashier/CartProductPanel";
import CashierOpenModal from "../components/cashier/CashierOpenModal";
import PayementPanel from "../components/cashier/PayementPanel";
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
      <CashierOpenModal open={isCashierOpen} handleClose={handleCloseCashier} />
    </Box>
  );
};

export default CashierPage;
