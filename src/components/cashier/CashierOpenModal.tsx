import CancelIcon from "@mui/icons-material/Cancel";
import { Paper, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const CashierOpenModal: FunctionComponent<Props> = (props) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "fit-content",
        padding: "32px",
        maxWidth: "500px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center",
      }}
    >
      <CancelIcon
        sx={{
          width: "237px",
          height: "237px",
          color: "#f44337",
        }}
      />
      <Typography
        color={"#1B2F46"}
        fontFamily={"Poppins"}
        fontSize={48}
        textAlign={"center"}
        fontWeight={700}
      >
        Caisse ouverte
      </Typography>
      <Typography
        color={"#1B2F46"}
        fontFamily={"Poppins"}
        fontSize={24}
        textAlign={"center"}
        fontWeight={500}
      >
        Veuillez fermer le tiroir pour continuer à utiliser la caisse
      </Typography>
    </Paper>
  );
};

export default CashierOpenModal;
