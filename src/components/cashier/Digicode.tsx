import { Grid, Paper } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0];
const Digicode: FunctionComponent<Props> = (props) => {
  return (
    <Grid container>
      {tab.map((value, index) => (
        <Grid item xs={4}>
          <Case>{value}</Case>
        </Grid>
      ))}
    </Grid>
  );
};

const Case: FunctionComponent = ({ children }) => {
  return (
    <Paper
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
export default Digicode;
