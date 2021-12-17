import "./styles/app.scss";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PaymentModal from "./components/cashier/PaymentModal";
import Cashier from "./pages/Cashier";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Cashier />} />
        <Route path="/devpm" element={<PaymentModal price="40" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
