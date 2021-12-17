import { Box, Button, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

import cash from "../../asset/cash.png";
import cb from "../../asset/cb.png";
import chec from "../../asset/chec.png";

interface OwnProps {
  price: string;
}

type Props = OwnProps;

const PaymentModal: FunctionComponent<Props> = (props) => {
  const { price } = props;
  return (
    <Box
      sx={{
        backgroundColor: "cyan",
        marginLeft: "35vw",
        width: "600px",
      }}
    >
      <Typography>Sélectionnez un ou des moyens de paiement</Typography>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={cb} width="200px" height="100px" />
        </Box>
        <Box>
          <img src={cash} width="200px" height="100px" />
        </Box>
        <Box>
          <img src={chec} width="200px" height="100px" />
        </Box>
      </Box>
      <Box>
        <Button>Payer une partie</Button>
      </Box>
      <Box>
        <Button
          sx={{
            backgroundColor: "#2E4C6D",
            color: "white",
          }}
        >
          Retour
        </Button>
        <Button
          sx={{
            backgroundColor: "white",
            color: "#2E4C6D",
          }}
        >
          à payer : {price}
        </Button>
        <Button> Payer une partie</Button>
        <Button
          sx={{
            backgroundColor: "#2BA84A",
            color: "white",
          }}
        >
          Payer
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentModal;
