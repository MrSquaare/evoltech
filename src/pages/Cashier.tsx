import "../styles/app.scss";

import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, Paper } from "@mui/material";
import React, { FC, useCallback, useState } from "react";

import { ActionsPanel } from "../components/cashier/ActionsPanel";
import DigicodePanel from "../components/cashier/DigicodePanel";
import PayementPanel from "../components/cashier/PayementPanel";
import { ProductCardPanel } from "../components/cashier/ProductCardPanel";
import TopBar from "../components/layout/TopBar";
import { cashier } from "../constants/samples";

const CashierPage: FC = (props) => {
  const [code, setCode] = useState<string>("");
  const handleSubmit = useCallback(() => {}, []);

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
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "200px",
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "200px",
                  marginTop: "1rem",
                }}
              >
                <span>{code}</span>
                <CloseIcon onClick={() => setCode("")} />
              </Paper>
            </Box>
            <Box
              className="digit-container-panel"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <DigicodePanel onSubmit={handleSubmit} onSetCode={setCode} />
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
