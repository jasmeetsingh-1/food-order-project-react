import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../store/cart-context";

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

  function OnOrderClickHandler() {
    props.toCloseCart();
    props.toShowOrders();
  }

  const cart = (
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
      {cart}
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
        {hasItems && (
          <button className={classes.button} onClick={OnOrderClickHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
export default Cart;
