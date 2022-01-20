import CloseIcon from "@mui/icons-material/Close";
import { Alert, Box, Container, IconButton, Paper } from "@mui/material";
import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import Digicode from "../components/login/Digicode";
import { codeCashier } from "../constants/samples";
import { useLogin } from "../hooks/useLogin";

type Props = {};

enum codeType {
  "USER_NOT_FOUND",
}

const getErrorMessage = (code: codeType | undefined): string => {
  switch (code) {
    case codeType.USER_NOT_FOUND:
      return "Le code utilisateur est inconnu";
    default:
      return "";
  }
};

const LoginPage: FunctionComponent<Props> = (props) => {
  const navigate = useNavigate();

  const { setLogged } = useLogin({
    guard: (isLogged) => {
      if (isLogged) {
        navigate("/");
      }
    },
  });

  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<{ code: codeType } | undefined>();
  const handleCase = useCallback((value) => {
    setCode((code) => (code.length < 4 ? code + value : code));
  }, []);
  const handleSubmit = useCallback(() => {
    if (code === codeCashier) {
      setLogged(true);
      navigate("/");
    } else {
      setError({ code: codeType.USER_NOT_FOUND });
    }
  }, [code, setLogged, navigate]);

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
        {error && (
          <Alert severity="error" sx={{ marginBottom: "1rem" }}>
            {getErrorMessage(error?.code)}
          </Alert>
        )}
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
            <Box
              component={"span"}
              sx={{
                fontFamily: "Roboto,sans-serif",
                fontSize: "36px",
                color: "#2E4C6D",
              }}
            >
              {!code ? (
                <span style={{ color: "#8c8c8c" }}>
                  The code is {codeCashier}
                </span>
              ) : (
                code
              )}
            </Box>
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
