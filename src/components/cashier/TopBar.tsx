import { Box } from "@mui/material";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const TopBar: FunctionComponent<Props> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#4B555FC9",
        height: "100px",
      }}
    ></Box>
  );
};

export default TopBar;
