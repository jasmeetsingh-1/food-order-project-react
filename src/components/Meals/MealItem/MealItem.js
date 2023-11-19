import { useContext } from "react";
import classes from "./MealItem_cssFiles/MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
import { useDispatch } from "react-redux";

function MealItem(props) {
  const price = `₹${props.price.toFixed(2)}`;
  const dispatch = useDispatch();
  const context = useContext(CartContext);

  function addingItemToCart(amount) {
    // const CartElementToAdd = {};
    // console.log(CartElementToAdd);
    const item = {
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    };
    dispatch({ type: "add", item: item });
    console.log("dispatch");
    context.addItem({
      id: props.id,
      amount: amount,
      name: props.name,
      price: props.price,
    });
  }

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      {/* <MealItemForm id={props.id}/> */}
      <MealItemForm id={props.id} toAddInCart={addingItemToCart} />
    </div>
  );
}

export default MealItem;
