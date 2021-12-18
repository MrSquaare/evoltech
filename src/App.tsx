import "./styles/app.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaymentModal from "./components/cashier/PaymentModal";
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
        <Route path="/dev/pm" element={<PaymentModal price="40" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
