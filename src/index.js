import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import CartProvider from "./components/store/CartProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <CartProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </CartProvider>,
  document.getElementById("root")
);
