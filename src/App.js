// import React, { useState, useContext, useEffect } from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Orders/OrderForm";
import { Provider } from "react-redux";
import store from "./components/OrderFromRedux/store/store";
import LoginPage from "./components/login/loginpage";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
  }
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
                toGoBack={goBack}
              />
              {showingCart && <Cart toCloseCart={hideCart} />}
            </>
          }
        />
        <Route path="/login" element={<LoginPage />} />
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
