import "./styles/app.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cashier from "./pages/Cashier";
import Login from "./pages/Login";
import PaymentModal from "./components/cashier/PaymentModal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Cashier />} />
        <Route path="/devpm" element={<PaymentModal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App ;
