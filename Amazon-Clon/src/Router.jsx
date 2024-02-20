import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import statements
import Landing from "./Pages/Landing/Landing.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart.jsx";
import Results from "./Pages/Results/Results.jsx";
import ProductDetail from "./Pages/ProductDetail/ProductDetail.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/protectedRout/ProtectedRoute.jsx";

function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51OkqWOLVB1M1FfdOddwOCC00lHUFdvkMpCeKr5RZ1JWIMGMStS1hQp5ALDzJK5oGxisPAf84yrLUy8JxlA1w5VFd00CrWcCvAn"
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"Please log in to access this page."}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"Please log in to access your orders."}
              redirect={"/login"} // Updated redirect path to "/login"
            >
              <Elements stripe={stripePromise}>
                <Orders />
              </Elements>
            </ProtectedRoute>
          }
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/Products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
