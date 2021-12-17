import { Box, Button, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {
  price: string;
}

type Props = OwnProps;

const PaymentModal: FunctionComponent<Props> = (props) => {
  const { price } = props;
  return (
    <Box>
      <Typography>Sélectionnez un ou des moyens de paiement</Typography>
      <Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </Box>
      <Box>
        <Button>Payer une partie</Button>
      </Box>
      <Box>
        <Button> Retour </Button>
        <Button> à payer : {price} </Button>
        <Button> Payer une partie</Button>
        <Button> Payer</Button>
      </Box>
    </Box>
  );
};

export default PaymentModal;
