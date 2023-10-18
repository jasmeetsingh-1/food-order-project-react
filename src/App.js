import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CardProvider from "./components/store/CartProvider";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
  }

  return (
    <CardProvider>
      {showingCart && <Cart toCloseCart={hideCart} />}
      <Header toShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
