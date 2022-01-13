import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import QrCodeIcon from "@mui/icons-material/QrCode";
import { Box, IconButton, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

import { Cashier } from "../../models/Cashier";
import { TopBarClock } from "./TopBarClock";

type Props = {
  cashier: Cashier;
  onScan: () => void;
  onOpenCashier: () => void;
  onDisconnect: () => void;
};

const TopBar: FunctionComponent<Props> = ({
  cashier,
  onScan,
  onOpenCashier,
  onDisconnect,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        backgroundColor: "#4B555FC9",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <IconButton size="large" sx={{ color: "white" }}>
        <MoreHorizIcon />
      </IconButton>
      <Typography variant="h5" component="h1" sx={{ color: "white" }}>
        Bonjour, {cashier.firstName}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: "0.5rem" }}>
          <TopBarClock />
        </Box>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => onScan()}
        >
          <QrCodeIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => onOpenCashier()}
        >
          <PresentToAllIcon />
        </IconButton>
        <IconButton
          size="large"
          sx={{ color: "white" }}
          onClick={() => onDisconnect()}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
