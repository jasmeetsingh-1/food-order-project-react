// import React, { useState, useContext, useEffect } from "react";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Orders/OrderForm";
// import CartContext from "./components/store/cart-context";
import { Provider } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "./components/OrderFromRedux/store/store";

function App() {
  // const cartContext = useContext(CartContext);
  const [showingCart, setShowingCart] = useState(false);
  const navigate = useNavigate();
  // const [showingOrders, setShowingOrders] = useState(false);
  // const [showingFeedback, setShowingFeedback] = useState(false);
  // const history = useHistory();

  // useEffect(() => {
  //   // Listen to route changes and force a page reload
  //   const unlisten = history.listen(() => {
  //     window.location.reload();
  //   });

  //   return () => {
  //     // Clean up the listener when the component unmounts
  //     unlisten();
  //   };
  // }, [history]);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
    // setShowingFeedback(false);
  }

  function showOrders() {
    // history.push("/showingOrder");
    navigate("/showingOrder");
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
            <OrderForm
              toShowCart={showCart}
              toContinueHandler={hideOrders}
              toGoBack={goBack}
            />
          }
        />
        {showingCart && (
          <Route
            path="/"
            element={<Cart toCloseCart={hideCart} toShowOrders={showOrders} />}
          />
        )}
        <Route
          path="/"
          element={
            <>
              <Header toShowCart={showCart} />
              <main>
                <Meals />
              </main>
            </>
          }
        />
      </Routes>
    </Provider>
  );
}

export default App;
