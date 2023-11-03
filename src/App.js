import React, { useState, useContext } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
import OrderForm from "./components/Orders/OrderForm";
import Feedback from "./components/Feedback/Feedback";
import CartContext from "./components/store/cart-context";

function App() {
  const cartContext = useContext(CartContext);
  const [showingCart, setShowingCart] = useState(false);
  const [showingOrders, setShowingOrders] = useState(false);
  const [showingFeedback, setShowingFeedback] = useState(false);

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
    setShowingFeedback(true);
  }

  function closingOrderForm() {
    setShowingOrders(false);
  }

  function closeFeedback() {
    cartContext.clearCart(); // Use CartContext directly to clear the cart
    setShowingFeedback(false);
  }

  function goBack() {
    setShowingOrders(false);
    setShowingCart(true);
  }

  return (
    <CartProvider>
      {showingOrders && (
        <OrderForm toCloseOrderFrom={closingOrderForm} toContinueHandler={hideOrders} toGoBack={goBack} />
      )}
      {showingFeedback && <Feedback onSubmit={closeFeedback} />}
      {showingCart && <Cart toCloseCart={hideCart} toShowOrders={showOrders} />}
      <Header toShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
