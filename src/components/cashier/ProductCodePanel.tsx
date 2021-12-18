import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Paper } from "@mui/material";
import React, { FunctionComponent } from "react";

import Digicode from "./Digicode";

interface OwnProps {}

type Props = OwnProps;

const ProductCodePanel: FunctionComponent<Props> = (props) => {
  return (
    <Box sx={{ display: "flex", padding: 2 }}>
      <Box className="code-container" sx={{ flex: 1 }}>
        <Box>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flex: 1,
            }}
          >
            <span>{48}</span>
            <CloseIcon />
          </Paper>
        </Box>
        <Box>
          <Button>Produit inconnu</Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Digicode />
      </Box>
    </Box>
  );
};

export default ProductCodePanel;
