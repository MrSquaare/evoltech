import "./styles/app.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductDeleteModal from "./components/cashier/ProductDeleteModal";
import CashierPage from "./pages/Cashier";
import { FSMPage } from "./pages/FSM";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fsm" element={<FSMPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<CashierPage />} />

        {"dev"}
        <Route path={"/dev/pdm"} element={<ProductDeleteModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
