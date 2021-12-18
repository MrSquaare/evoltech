import { Box, Button } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const WaitingPanel: FunctionComponent<Props> = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        color={"primary"}
        variant={"contained"}
        sx={{ width: 337, height: 71, fontSize: 36 }}
      >
        Payer
      </Button>
    </Box>
  );
};

export default WaitingPanel;
