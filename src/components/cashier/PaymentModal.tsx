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
        border: 2,
        borderRadius: "20px",
        marginLeft: "30vw",
        width: "800px",
        padding: "30px",
      }}
    >
      <Typography
        sx={{
          padding: "20px",
        }}
      >
        Sélectionnez un ou des moyens de paiement
      </Typography>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            padding: "50px",
          }}
        >
          <Button
            onClick={() => {
              alert("CB sélectionné pour le paiement");
            }}
          >
            <img src={cb} width="200px" height="100px" />
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() => {
              alert("Espèces  sélectionné pour le paiement");
            }}
          >
            <img src={cash} width="200px" height="100px" />
          </Button>
        </Box>
        <Box>
          <Button
            onClick={() => {
              alert("Chèque sélectionné pour le paiement");
            }}
          >
            <img src={chec} width="200px" height="100px" />
          </Button>
        </Box>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "#BBBBBB",
            boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          Payer une partie
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#2E4C6D",
            color: "white",
            boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          Retour
        </Button>
        <Button
          size="large"
          sx={{
            backgroundColor: "white",
            color: "#2E4C6D",
            boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          à payer : {price}
        </Button>
        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{
            boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
            borderRadius: "10px",
          }}
        >
          Payer
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentModal;
