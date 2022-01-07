import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import React, { FunctionComponent, useCallback, useState } from "react";

import cash from "../../asset/cash.png";
import cb from "../../asset/cb.png";
import check from "../../asset/chec.png";
import { useCashRegister } from "../../hooks/useCashRegister";
import { Payment } from "../../models/Payment";

interface OwnProps {
  price: number;
  open: boolean;
  handleClose: () => void;
}

type Props = OwnProps;

const PaymentModal: FunctionComponent<Props> = ({
  price,
  open,
  handleClose,
}) => {
  const { handlePayOrder } = useCashRegister();
  const [paymentType, setPaymentType] = useState("cb");

  const handlePay = useCallback(() => {
    const payment = new Payment(price);

    handlePayOrder(payment);
  }, [price, handlePayOrder]);

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
            <Button onClick={() => setPaymentType("cb")}>
              <img src={cb} width="200px" height="100px" alt="Carte bleue" />
            </Button>
          </Box>
          <Box>
            <Button onClick={() => setPaymentType("cash")}>
              <img src={cash} width="200px" height="100px" alt="Liquide" />
            </Button>
          </Box>
          <Box>
            <Button onClick={() => setPaymentType("check")}>
              <img src={check} width="200px" height="100px" alt="Chèque" />
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
            onClick={() => handleClose()}
          >
            {"<"} Retour
          </Button>
          <Paper
            sx={{
              display: "inline-block",
              padding: "9px 22px",
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
            A PAYER : {price} €
          </Paper>
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
            onClick={() => handlePay()}
          >
            Payer {">"}
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default PaymentModal;
