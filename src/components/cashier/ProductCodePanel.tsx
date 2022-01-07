import { Box, Paper } from "@mui/material";
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";

import { products } from "../../constants/samples";
import { useCashRegister } from "../../hooks/useCashRegister";
import { ProductRepository } from "../../repositories/product";
import ProductDigicode from "./ProductDigicode";

interface OwnProps {
  handleOpenProduct: () => void;
}

type Props = OwnProps;

const ProductCodePanel: FunctionComponent<Props> = (props) => {
  const { handleOpenProduct } = props;
  const productRepository = useMemo(
    () => ProductRepository.getInstance(products),
    []
  );
  const { handleAddProduct } = useCashRegister();
  const [code, setCode] = useState<string>("");
  const handleCase = useCallback((value) => {
    setCode((code) => (code.length < 4 ? code + value : code));
  }, []);
  const handleClear = useCallback(() => {
    setCode("");
  }, []);
  const handleSubmit = useCallback(() => {
    if (code.length !== 4) return;

    const parsedValue = parseInt(code, 10);

    if (isNaN(parsedValue)) return;

    const product = productRepository.findProduct(parsedValue);

    if (!product) return;

    handleAddProduct(product);
  }, [handleAddProduct, productRepository, code]);

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
            <span>{code}</span>
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
