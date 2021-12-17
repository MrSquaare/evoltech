import { Box, Button, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

import PayementPanel from "../components/cashier/PayementPanel";
import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

interface OwnProps {}

type Props = OwnProps;

const ActionsPanel: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: "#FF7438",
          borderColor: "#FF7438",
          ":hover": { backgroundColor: "#FF7438", borderColor: "#FF7438" },
        }}
      >
        <Typography variant="h6" component="span" color="white">
          Mise en attente
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: "#EE5F5F",
          borderColor: "#EE5F5F",
          ":hover": { backgroundColor: "#EE5F5F", borderColor: "#EE5F5F" },
        }}
      >
        <Typography variant="h6" component="span" color="white">
          Abandonner
        </Typography>
      </Button>
    </Box>
  );
};

const Cashier: FunctionComponent<Props> = (props) => {
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
