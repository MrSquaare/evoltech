import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { FunctionComponent, useCallback, useMemo } from "react";

import { products } from "../../constants/samples";
import { useCashRegister } from "../../hooks/useCashRegister";
import { Cashier } from "../../models/Cashier";
import { ProductRepository } from "../../repositories/product";
import { TopBarClock } from "./TopBarClock";

type Props = {
  cashier: Cashier;
  onOpenCashier: () => void;
  onDisconnect: () => void;
};

const TopBar: FunctionComponent<Props> = ({
  cashier,
  onOpenCashier,
  onDisconnect,
}) => {
  const productRepository = useMemo(
    () => ProductRepository.getInstance(products),
    []
  );
  const { handleScanProduct } = useCashRegister();

  const simulateScan = useCallback(() => {
    handleScanProduct(productRepository.scanProduct());
  }, [handleScanProduct, productRepository]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "#4B555FC9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton size="large" sx={{ color: "white" }}>
        <MoreHorizIcon />
      </IconButton>
      <Typography variant="h5" component="h1" sx={{ color: "white" }}>
        Bonjour, {cashier.firstName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          color={"primary"}
          variant={"contained"}
          sx={{
            width: "30px",
            height: "30px",
            fontSize: 10,
            backgroundColor: "black",
            marginRight: "30px",
          }}
          onClick={() => simulateScan()}
        >
          Scan
        </Button>

        <Box sx={{ marginRight: "0.5rem" }}>
          <TopBarClock />
        </Box>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => onOpenCashier()}
        >
          <PresentToAllIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => onDisconnect()}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
