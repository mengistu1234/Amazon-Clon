import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import statements
import Landing from "./Pages/Landing/Landing.jsx";
import SignIn from "./Pages/Auth/SignUP";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart.jsx";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />{" "}
        <Route path="/Products/:productId" element={<ProductDetail />} />{" "}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
