import "./styles/app.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductModal from "./components/cashier/ProductModal";
import CashierPage from "./pages/Cashier";
import FSMPage from "./pages/FSM";
import LoginPage from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<CashierPage />} />

        {/* Dev Routes */}
        <Route path="/dev/fsm" element={<FSMPage />} />
        <Route path="/dev/pmc" element={<ProductModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
