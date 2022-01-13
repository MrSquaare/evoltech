import { Box, Button, List, ListItem, Modal, Paper } from "@mui/material";
import React, { FunctionComponent, useState } from "react";

import { Product } from "../../models/Product";
import ProductList from "../products/ProductList";
import { useCashRegister } from "../../hooks/useCashRegister";

interface OwnProps {
  visible: boolean;
  handleClose: () => void;
}

type Props = OwnProps;

const ProductModal: FunctionComponent<Props> = (props) => {
  const { visible, handleClose } = props;
  const { handleAddProduct } = useCashRegister();
  const handleAddProductCallback = (product: Product) => {
    handleClose();
    handleAddProduct(product);
  };

  return (
    <Modal open={visible} onClose={handleClose}>
      <Paper
        elevation={3}
        sx={{
          padding: "32px",
          position: "absolute",
          width: "80vw",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ marginRight: "20px" }}>
            <List disablePadding sx={{ width: "200px", height: "100%" }}>
              <ListItem
                disablePadding
                sx={{ marginBottom: "10px", width: "100%" }}
              >
                <Button
                  sx={{
                    backgroundColor: "#607790",
                    ":hover": {
                      backgroundColor: "#607790",
                    },
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "18px",
                    width: "100%",
                    textTransform: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  Produits rapides
                </Button>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ marginBottom: "10px", width: "100%" }}
              >
                <Button
                  sx={{
                    backgroundColor: "#607790",
                    ":hover": {
                      backgroundColor: "#607790",
                    },
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "18px",
                    width: "100%",
                    textTransform: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  Jardin
                </Button>
              </ListItem>
              <ListItem
                disablePadding
                sx={{ marginBottom: "10px", width: "100%" }}
              >
                <Button
                  sx={{
                    backgroundColor: "#607790",
                    ":hover": {
                      backgroundColor: "#607790",
                    },
                    color: "white",
                    fontFamily: "poppins",
                    fontSize: "18px",
                    width: "100%",
                    textTransform: "none",
                    justifyContent: "flex-start",
                  }}
                >
                  Outillage
                </Button>
              </ListItem>
            </List>
          </Box>
          <ProductList handleAddProduct={handleAddProductCallback} />
        </Box>
        <Box
          className={"button-container"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "24px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#607790",
              ":hover": {
                backgroundColor: "#607790",
              },
              color: "white",
              fontFamily: "poppins",
              fontSize: "18px",
            }}
            onClick={handleClose}
          >
            {"<"} Retour
          </Button>
          <Button
            sx={{
              backgroundColor: "#FC997C",
              ":hover": {
                backgroundColor: "#FC997C",
              },
              color: "white",
              fontFamily: "poppins",
              fontSize: "18px",
            }}
            onClick={() => {
              handleClose();
            }}
          >
            Confirmer
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default ProductModal;
