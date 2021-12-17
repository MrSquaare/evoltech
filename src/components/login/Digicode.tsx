import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import React, { Dispatch, FunctionComponent, SetStateAction } from "react";

type Props = {
  onSubmit: () => void;
  onSetCode: Dispatch<SetStateAction<string>>;
};
const tab = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const Digicode: FunctionComponent<Props> = (props) => {
  const { onSubmit: handleSubmit, onSetCode } = props;
  return (
    <Grid container sx={{ maxWidth: 380, margin: "0 auto" }}>
      {tab.map((value, index) => (
        <Grid item>
          <Case children={value} onClick={onSetCode} />
        </Grid>
      ))}
      <Grid item>
        <CaseSubmit onClick={handleSubmit} />
      </Grid>
    </Grid>
  );
};

const Case: FunctionComponent<{
  onClick: Dispatch<SetStateAction<string>>;
}> = ({ children, onClick }) => {
  return (
    <Paper
      onClick={() =>
        onClick((prev) => {
          if (prev.length < 4) {
            return (prev + children) as string;
          }
          return prev;
        })
      }
      elevation={0}
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
        fontSize: "26px",
      }}
    >
      {children}
    </Paper>
  );
};

const CaseSubmit: FunctionComponent<{ onClick: () => void }> = (props) => {
  const { onClick } = props;
  return (
    <Paper
      onClick={onClick}
      elevation={0}
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
        fontSize: "26px",
      }}
    >
      Valider
    </Paper>
  );
};

export default Digicode;
