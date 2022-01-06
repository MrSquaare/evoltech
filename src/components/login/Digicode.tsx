import { Button, Grid } from "@mui/material";
import React, { FunctionComponent } from "react";

const tab = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

type Props = {
  onCase: (value: number) => void;
  onSubmit: () => void;
};

const Digicode: FunctionComponent<Props> = (props) => {
  const { onCase, onSubmit } = props;
  return (
    <Grid container sx={{ maxWidth: 380, margin: "0 auto" }}>
      {tab.map((value, index) => (
        <Grid key={index} item>
          <Case onClick={onCase}>{value}</Case>
        </Grid>
      ))}
      <Grid item>
        <CaseSubmit onClick={onSubmit} />
      </Grid>
    </Grid>
  );
};

type CaseProps = {
  children: number;
  onClick: (value: number) => void;
};

const Case: FunctionComponent<CaseProps> = ({ children, onClick }) => {
  return (
    <Button
      variant="contained"
      onClick={() => onClick(children)}
      sx={{
        backgroundColor: "#2E4C6D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "100px",
        boxSizing: "border-box",
        margin: "13px",
        color: "white",
        fontSize: "36px",
        fontFamily: "Roboto,sans-serif",
        ":hover": {
          backgroundColor: "#2E4C6D",
        },
      }}
    >
      {children}
    </Button>
  );
};

const CaseSubmit: FunctionComponent<{ onClick: () => void }> = (props) => {
  const { onClick } = props;
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: "#FC997C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "226px",
        boxSizing: "border-box",
        margin: "13px",
        color: "white",
        fontSize: "36px",
        fontFamily: "Poppins, sans-serif",
        ":hover": {
          backgroundColor: "#FC997C",
        },
      }}
    >
      Valider
    </Button>
  );
};

export default Digicode;
