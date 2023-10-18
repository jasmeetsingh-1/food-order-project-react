import { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

function Cart(props) {
  const cartcontextItems = useContext(CartContext);
  const itemsArrays = cartcontextItems.items;
  const hasItems = itemsArrays.length > 0;
  let totalAmount = 0;

  function onAdditon(item) {
    const temp = {
      ...item,
      amount: 1,
    };
    cartcontextItems.addItem(temp);
  }

  function onRemoval(id) {
    cartcontextItems.removeItem(id);
  }

  function onClear() {
    cartcontextItems.clearCart();
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsArrays.map((item) => {
        totalAmount = totalAmount + item.price * item.amount;
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={onRemoval.bind(null, item.id)}
            onAdd={onAdditon.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );

  return (
    <Modal onClick={props.toCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.toCloseCart}>
          Close
        </button>
        {hasItems && (
          <button className={classes["button--alt"]} onClick={onClear}>
            Clear
          </button>
        )}
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
export default Cart;

//whole cart should be a modal so try doing that
