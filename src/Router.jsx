import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import SignIn from "./Pages/Auth/Signup";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
//import { Elements } from "@stripe/react-stripe-js";
//import { loadStripe } from "@stripe/stripe-js";
//import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
//   "pk_test_51OkoxvJ5ypc7iGlvy6X3RBppazD2x9Bdm01c2P4UHYSgS7Imie0HN7mjerMW2lKeNiEjzu2TQDomUf6m7ZxgWe1p00TOLGsrSJ"
// );

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignIn />} />
        <Route
          path="/payments"
          element={<Payment />}
          // <ProtectedRoute
          //   msg={"you must login to pay"}
          //   redirect={"/payments"}
          // >
          //   {/* <Elements stripe={stripePromise}>
          //     <Payment />
          //   </Elements> */}
          // // </ProtectedRoute>
        />
        <Route
          path="/orders"
          element={<Orders />}
          // <ProtectedRoute
          //   msg={"you must login to access your orders"}
          //   redirect={"/orders"}
          // >
          //   <Orders />
          // </ProtectedRoute>
        />

        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
