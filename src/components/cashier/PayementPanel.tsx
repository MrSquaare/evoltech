import { Box, Button, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";

import { useCashRegister } from "../../hooks/useCashRegister";
import PaymentModal from "./PaymentModal";

interface OwnProps {}

type Props = OwnProps;

const PayementPanel: FunctionComponent<Props> = (props) => {
  const { cashRegister } = useCashRegister();
  const [modalProperties, setModalProperties] = useState<{
    visible: boolean;
  }>({
    visible: false,
  });

  const handleOpen = () => {
    setModalProperties({ visible: true });
  };
  const handleClose = () => {
    setModalProperties({ visible: false });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "1rem",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <Box
        className="price-view"
        sx={{
          display: "flex",
          width: 337,
          backgroundColor: "#EFEFEF",
          height: 71,
          marginBottom: 2,
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingLeft: 2,
            border: "1px solid #CCCCCC",
          }}
        >
          <Typography fontSize={32}>Total :</Typography>
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            paddingRight: 2,
            border: "1px solid #CCCCCC",
          }}
        >
          <Typography fontSize={32}>
            {cashRegister.currentOrder.getRemainingPrice()} €
          </Typography>
        </Box>
      </Box>

      <Button
        color={"primary"}
        variant={"contained"}
        sx={{
          width: 337,
          height: 71,
          fontSize: 36,
          backgroundColor: "#2CA849",
        }}
        onClick={() => handleOpen()}
      >
        Payer
      </Button>
      <PaymentModal
        price={cashRegister.currentOrder.getRemainingPrice()}
        open={modalProperties.visible}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default PayementPanel;
