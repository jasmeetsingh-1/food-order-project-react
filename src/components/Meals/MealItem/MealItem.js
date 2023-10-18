import { useContext } from "react";
import classes from "./MealItem_cssFiles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";

function MealItem(props) {
  const price = `₹${props.price.toFixed(2)}`;
  const context = useContext(CartContext);

  function addingItemToCart(amount) {
    context.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* <MealItemForm id={props.id}/> */}
      <MealItemForm id={props.id} toAddInCart={addingItemToCart} />
    </li>
  );
}

export default MealItem;
