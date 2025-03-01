import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./screens/account";
import Customer from "./screens/customer"; 
import Product from "./screens/product";
import Order from "./screens/orders";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/accounts" element={<Account />} />
        <Route path="/products" element={<Product />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
