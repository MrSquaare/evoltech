import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

export const ActionsPanel: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: "#FF7438",
          borderColor: "#FF7438",
          ":hover": { backgroundColor: "#FF7438", borderColor: "#FF7438" },
        }}
      >
        <Typography
          variant="h6"
          component="span"
          color="white"
          fontWeight="bold"
        >
          Mise en attente
        </Typography>
      </Button>
      <Button
        variant="outlined"
        size="large"
        sx={{
          backgroundColor: "#EE5F5F",
          borderColor: "#EE5F5F",
          ":hover": { backgroundColor: "#EE5F5F", borderColor: "#EE5F5F" },
        }}
      >
        <Typography
          variant="h6"
          component="span"
          color="white"
          fontWeight="bold"
        >
          Abandonner
        </Typography>
      </Button>
    </Box>
  );
};
