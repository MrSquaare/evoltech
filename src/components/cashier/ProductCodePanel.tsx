import { Box, Paper } from "@mui/material";
import React, { FunctionComponent, useCallback, useMemo } from "react";

import { useCashRegister } from "../../hooks/useCashRegister";
import { useProductRepository } from "../../hooks/useProductRepository";
import ProductDigicode from "./ProductDigicode";

interface OwnProps {
  handleOpenProduct: () => void;
}

type Props = OwnProps;

const ProductCodePanel: FunctionComponent<Props> = (props) => {
  const { handleOpenProduct } = props;
  const { findProduct } = useProductRepository();
  const { cashRegister, handleSetPin, handleAddProduct } = useCashRegister();

  const handleCase = useCallback(
    (value) => {
      if (cashRegister.pin.length < 4) {
        handleSetPin(cashRegister.pin + value);
      }
    },
    [cashRegister.pin, handleSetPin]
  );

  const handleClear = useCallback(() => {
    handleSetPin("");
  }, [handleSetPin]);

  const handleSubmit = useCallback(() => {
    if (cashRegister.pin.length < 4) return;

    const pin = parseInt(cashRegister.pin);

    if (isNaN(pin)) return;

    const product = findProduct(pin);

    if (!product) return;

    handleAddProduct(product);
  }, [cashRegister, findProduct, handleAddProduct]);

  return (
    <Box sx={{ display: "flex", flexGrow: 1 }}>
      <Box
        className="code-container"
        sx={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "50px",
              margin: "10px",
              flex: 1,
            }}
          >
            <span>{cashRegister.pin}</span>
          </Paper>
        </Box>
        <Box>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "#2E4C6D",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              boxSizing: "border-box",
              margin: "10px",
              color: "white",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={handleOpenProduct}
          >
            Produit inconnu
          </Paper>
        </Box>
      </Box>
      <Box sx={{ flex: 2 }}>
        <ProductDigicode
          onCase={handleCase}
          onClear={handleClear}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
};

export default ProductCodePanel;
