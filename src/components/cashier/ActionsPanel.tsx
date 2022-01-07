import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

import { useCashRegister } from "../../hooks/useCashRegister";

export const ActionsPanel: FC = () => {
  const { cashRegister, handleHoldOrder, handleResumeOrder, handleResetOrder } =
    useCashRegister();

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
        onClick={() =>
          cashRegister.isHolding ? handleResumeOrder() : handleHoldOrder()
        }
      >
        <Typography
          variant="h6"
          component="span"
          color="white"
          fontWeight="bold"
        >
          {cashRegister.isHolding ? "Reprendre" : "Mise en attente"}
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
        onClick={() => handleResetOrder()}
      >
        <Typography
          variant="h6"
          component="span"
          color="white"
          fontWeight="bold"
        >
          Abandonner
        </Typography>
      </Button>
    </Box>
  );
};
