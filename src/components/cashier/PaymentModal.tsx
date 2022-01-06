import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

import cash from "../../asset/cash.png";
import cb from "../../asset/cb.png";
import chec from "../../asset/chec.png";

interface OwnProps {
  price: string;
  open: boolean;
  handleClose: () => void;
}

type Props = OwnProps;

const PaymentModal: FunctionComponent<Props> = (props) => {
  const { price, open, handleClose } = props;
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper
        sx={{
          margin: "auto",
          width: "800px",
          padding: "30px",
        }}
        elevation={3}
      >
        <Typography
          sx={{
            margin: "auto",
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "36px",
            lineHeight: "54px",
            textAlign: "center",
            color: "#2D353E",
          }}
        >
          Sélectionnez un ou des moyens de paiement
        </Typography>
        <Box
          sx={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            marginTop: "50px",
            marginBottom: "50px",
            justifyContent: "center",
          }}
        >
          <Box>
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
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              marginLeft: "69%",
              background: "#BBBBBB",
              boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            Payer une partie
          </Button>
        </Box>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              margin: "5%",
              backgroundColor: "#2E4C6D",
              color: "white",
              boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            {"<"} Retour
          </Button>
          <Button
            size="large"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontStyle: "normal",
              fontWeight: 500,
              margin: "5%",
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
              fontWeight: 500,
              fontStyle: "normal",
              fontFamily: "Poppins, sans-serif",
              margin: "5%",
              boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
              borderRadius: "10px",
            }}
          >
            Payer {">"}
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default PaymentModal;
