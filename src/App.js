// import React, { useState, useContext, useEffect } from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Orders/OrderForm";
// import CartContext from "./components/store/cart-context";
import { Provider } from "react-redux";
import store from "./components/OrderFromRedux/store/store";
import Login from "./components/login/login";

function App() {
  // const cartContext = useContext(CartContext);
  const [showingCart, setShowingCart] = useState(false);
  // const [showingOrders, setShowingOrders] = useState(false);
  // const [showingFeedback, setShowingFeedback] = useState(false);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
    // setShowingFeedback(false);
  }

  function hideOrders() {
    // setShowingFeedback(true);
  }

  // function closeFeedback() {
  //   cartContext.clearCart();
  // }

  function goBack() {
    setShowingCart(true);
  }

  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/showingOrder"
          element={
            <>
              <OrderForm
                toShowCart={showCart}
                toContinueHandler={hideOrders}
                toGoBack={goBack}
              />
              {showingCart && <Cart toCloseCart={hideCart} />}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          exact
          path="/"
          element={
            <>
              <Header toShowCart={showCart} />
              <main>
                <Meals />
              </main>
              {showingCart && <Cart toCloseCart={hideCart} />}
            </>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
