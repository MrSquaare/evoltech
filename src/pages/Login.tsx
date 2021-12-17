import CloseIcon from "@mui/icons-material/Close";
import { Box, Container, IconButton, Paper } from "@mui/material";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Digicode from "../components/login/Digicode";

type Props = {};

const LoginPage: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>("");
  const handleCase = useCallback((value) => {
    setCode((code) => (code.length < 4 ? code + value : code));
  }, []);
  const handleSubmit = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Container maxWidth={"sm"}>
        <Box className="code-container" sx={{ marginBottom: "2rem" }}>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{code}</span>
            <IconButton>
              <CloseIcon onClick={() => setCode("")} />
            </IconButton>
          </Paper>
        </Box>
        <Box className="digit-container">
          <Digicode onCase={handleCase} onSubmit={handleSubmit} />
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
