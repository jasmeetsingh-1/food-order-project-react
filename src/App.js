// import React, { useState, useContext, useEffect } from "react";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import OrderForm from "./components/Orders/OrderForm";
// import CartContext from "./components/store/cart-context";
import { Provider } from "react-redux";
import store from "./components/OrderFromRedux/store/store";

function App() {
  // const cartContext = useContext(CartContext);
  const [showingCart, setShowingCart] = useState(false);
  // const [showingOrders, setShowingOrders] = useState(false);
  // const [showingFeedback, setShowingFeedback] = useState(false);
  const history = useHistory();

  useEffect(() => {
    // Listen to route changes and force a page reload
    const unlisten = history.listen(() => {
      window.location.reload();
    });

    return () => {
      // Clean up the listener when the component unmounts
      unlisten();
    };
  }, [history]);

  function showCart() {
    setShowingCart(true);
  }

  function hideCart() {
    setShowingCart(false);
    // setShowingFeedback(false);
  }

  function showOrders() {
    history.push("/showingOrder");
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
    <React.Fragment>
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/showingOrder">
              <OrderForm
                toShowCart={showCart}
                toContinueHandler={hideOrders}
                toGoBack={goBack}
              />
              {showingCart && (
                <Cart toCloseCart={hideCart} toShowOrders={showOrders} />
              )}
            </Route>
            <Route path="/" exact>
              {showingCart && (
                <Cart toCloseCart={hideCart} toShowOrders={showOrders} />
              )}
              <Header toShowCart={showCart} />
              <main>
                <Meals />
              </main>
            </Route>
          </Switch>
        </Provider>
      </Router>
    </React.Fragment>
  );
}

export default App;
