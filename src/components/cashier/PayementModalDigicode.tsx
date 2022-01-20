import { Button, Grid } from "@mui/material";
import React, { FunctionComponent } from "react";

type Props = {
  onCase: (value: number) => void;
  onClear: () => void;
  onSubmit: () => void;
};

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const PayementModalDigiCode: FunctionComponent<Props> = (props) => {
  const { onCase, onClear, onSubmit } = props;
  return (
    <Grid
      container
      sx={{
        maxWidth: 380,
        margin: "0 auto",
        display: "flex",
        width: "300px",
      }}
    >
      {tab.map((value, index) => (
        <Grid key={index} item>
          <Case onClick={onCase}>{value}</Case>
        </Grid>
      ))}
      <Grid item>
        <CaseDelete onClick={onClear} />
      </Grid>
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
        height: "50px",
        width: "70px",
        boxSizing: "border-box",
        margin: "10px",
        color: "white",
        fontSize: "26px",
        ":hover": {
          backgroundColor: "#2E4C6D",
        },
      }}
    >
      {children}
    </Button>
  );
};

type CaseDeleteProps = {
  onClick: () => void;
};

const CaseDelete: FunctionComponent<CaseDeleteProps> = (props) => {
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
        height: "50px",
        width: "70px",
        boxSizing: "border-box",
        margin: "10px",
        color: "white",
        fontSize: "16px",
        ":hover": {
          backgroundColor: "#FC997C",
        },
      }}
    >
      Clear
    </Button>
  );
};

type CaseSubmitProps = {
  onClick: () => void;
};

const CaseSubmit: FunctionComponent<CaseSubmitProps> = (props) => {
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
        height: "50px",
        width: "70px",
        boxSizing: "border-box",
        margin: "10px",
        color: "white",
        fontSize: "20px",
        ":hover": {
          backgroundColor: "#FC997C",
        },
      }}
    >
      ➞
    </Button>
  );
};

export default PayementModalDigiCode;
