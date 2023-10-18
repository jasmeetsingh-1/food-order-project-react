import CartIcon from "../Cart/CartIcon";
import classes from "./cssFiles/HeaderCartButton.module.css";
import { useContext, useEffect } from "react";
import CartContext from "../store/cart-context";

function HeaderCartButton(props) {
  const cartItems = useContext(CartContext);

  const numberOfItems = cartItems.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  // let numberOfItems = 0;

  // cartItems.items.map((food) => {
  //   numberOfItems = numberOfItems + food.amount;
  // });

  function buttonClickedToShowCart() {
    props.showingCart();
  }
  return (
    <button className={classes.button} onClick={buttonClickedToShowCart}>
      <span className={classes.CartIcon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfItems}
        {/* no of items in card */}
      </span>
    </button>
  );
}

export default HeaderCartButton;
