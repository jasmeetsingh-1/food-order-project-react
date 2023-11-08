import { useReducer } from "react";
import CartContext from "./cart-context";

function cartReducer(state, action) {
  if (action.type === "add") {
    const indexOFItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let newItem;

    if (indexOFItem !== -1) {
      const temp = state.items[indexOFItem];
      newItem = {
        ...temp,
        amount: temp.amount + action.item.amount,
      };
      const updatedItems = [...state.items];
      updatedItems[indexOFItem] = newItem;
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    } else {
      const updatedItems = state.items.concat(action.item);
      const newTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }
  }
  if (action.type === "remove") {
    const indexOFItem = state.items.findIndex((item) => item.id === action.id);
    const newTotalAmount = state.totalAmount - state.items[indexOFItem].price;
    if (state.items[indexOFItem].amount === 1) {
      //remove completed
      const updatedItems = state.items.filter((temp) => temp.id !== action.id);
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    } else {
      //update the amount
      let newItem = {
        ...state.items[indexOFItem],
        amount: state.items[indexOFItem].amount - 1,
      };
      const updatedItems = [...state.items];
      updatedItems[indexOFItem] = newItem;
      return {
        items: updatedItems,
        totalAmount: newTotalAmount,
      };
    }
  }

  if (action.type === "clear") {
    console.log("called clear function");
    return {
      items: [],
      totalAmount: 0,
    };
  }

  return state;
}

const initial = {
  items: [],
  totalAmount: 0,
};

function CardProvider(props) {
  const [cartState, cartReducerFunction] = useReducer(cartReducer, initial);

  function addItemIntoCart(item) {
    cartReducerFunction({ type: "add", item: item });
  }
  function removeItemFromCart(id) {
    cartReducerFunction({ type: "remove", id: id });
  }

  function clearCartItems() {
    cartReducerFunction({ type: "clear" });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemIntoCart,
    removeItem: removeItemFromCart,
    clearCart: clearCartItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CardProvider;
