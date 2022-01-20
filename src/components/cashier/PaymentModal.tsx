import {
  Box,
  Button,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  FunctionComponent,
  useCallback,
  useMemo,
  useState,
} from "react";

import cashImg from "../../asset/cash.png";
import cbImg from "../../asset/cb.png";
import checkImg from "../../asset/check.png";
import { useCashRegister } from "../../hooks/useCashRegister";
import { Payment } from "../../models/Payment";
import PayementModalDigiCode from "./PayementModalDigicode";

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
  const [amount, setAmount] = useState<number | null>(null);
  const [isAmountEdited, setIsAmountEdited] = useState(false);
  const currentAmount = useMemo(
    () => (amount !== null ? amount : price),
    [amount, price]
  );

  const handlePay = useCallback(() => {
    const payment = new Payment(currentAmount);

    handlePayOrder(payment);
    setAmount(null);
    setIsAmountEdited(false);
  }, [currentAmount, handlePayOrder, setAmount]);

  const handleChangeAmount = useCallback(
    (e) => {
      setAmount((prevState) => {
        if (prevState === price) return e;
        let valueParsed = Number(
          prevState === null ? 0 + "" + e : prevState + "" + e
        );
        return valueParsed > price ? price : valueParsed;
      });
    },
    [price]
  );

  const handleResetAmount = useCallback(() => {
    setAmount(0);
  }, []);

  const handleValidAmount = useCallback(() => {
    setIsAmountEdited(false);
  }, []);

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
          width: "1000px",
          padding: "30px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
        elevation={3}
      >
        <Box>
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

              "&  img": {
                objectPosition: "center",
                objectFit: "cover",
                height: "150px",
              },

              "& button": {
                border: "5px solid transparent",
                margin: "16px",
              },
              "& button:hover": {
                border: "5px solid #FC997C",
              },
            }}
          >
            <Box>
              <Button onClick={() => setPaymentType("cb")}>
                <img
                  src={cbImg}
                  width="200px"
                  height="100px"
                  alt="Carte bleue"
                />
              </Button>
            </Box>
            <Box>
              <Button onClick={() => setPaymentType("cash")}>
                <img src={cashImg} width="200px" height="100px" alt="Liquide" />
              </Button>
            </Box>
            <Box>
              <Button onClick={() => setPaymentType("check")}>
                <img src={checkImg} width="200px" height="100px" alt="Chèque" />
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Paper
              sx={{
                display: "inline-block",
                padding: "9px 22px",
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
                backgroundColor: "white",
                color: "#2E4C6D",
                boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            >
              Type de paiement sélectionné :{" "}
              {paymentType === "cb" ? "Carte bancaire" : null}
              {paymentType === "cash" ? "Liquide" : null}
              {paymentType === "check" ? "Chèque" : null}
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
                display: "flex",
                padding: "9px 22px",
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                fontWeight: 500,
                margin: "5%",
                backgroundColor: "white",
                color: "#2E4C6D",
                boxShadow: "0px 4px 18px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => setIsAmountEdited(true)}
            >
              A PAYER (€) :
              {isAmountEdited ? (
                <TextField
                  variant="outlined"
                  value={currentAmount}
                  onChange={(e) => {
                    const parsedValue = parseInt(e.target.value || "0");

                    if (isNaN(parsedValue)) return;

                    setAmount(parsedValue > price ? price : parsedValue);
                  }}
                  autoFocus={true}
                  size={"small"}
                  sx={{
                    display: "inline-block",
                    marginLeft: "4px",
                    marginRight: "4px",
                    width: "100px",
                  }}
                />
              ) : (
                <Typography
                  variant="body1"
                  sx={{
                    display: "inline-block",
                    marginLeft: "4px",
                    marginRight: "4px",
                  }}
                >
                  {currentAmount}
                </Typography>
              )}
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
        </Box>
        {isAmountEdited && (
          <Box>
            <PayementModalDigiCode
              onCase={handleChangeAmount}
              onClear={handleResetAmount}
              onSubmit={handleValidAmount}
            />
          </Box>
        )}
      </Paper>
    </Modal>
  );
};

export default PaymentModal;
