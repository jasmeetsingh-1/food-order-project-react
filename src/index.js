import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import CartProvider from "./components/store/CartProvider";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
