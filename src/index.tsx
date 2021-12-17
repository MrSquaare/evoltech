import "dayjs/locale/fr";

import { CssBaseline } from "@mui/material";
import dayjs from "dayjs";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

dayjs.locale("fr");

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
