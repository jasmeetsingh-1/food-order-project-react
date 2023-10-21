import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./components/store/CartProvider";
import OrderForm from "./components/Orders/OrderForm";

function App() {
  const [showingCart, setShowingCart] = useState(false);
  const [showingOrders, setShowingOrders] = useState(false);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
  }

  function showOrders() {
    setShowingOrders(true);
  }

  function hideOrders() {
    setShowingOrders(false);
  }

  return (
    <CardProvider>
      {showingOrders && <OrderForm toCloseOrderFrom={hideOrders} />}
      {showingCart && <Cart toCloseCart={hideCart} toShowOrders={showOrders} />}
      <Header toShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
