import { useRef, useState } from "react";
import classes from "./MealItem_cssFiles/MealItemForm.module.css";
import Input from "../../UI/Input";

function MealItemForm(props) {
  const enteredAmount = useRef();
  const [amountEnteredValid, setAmountEnteredValid] = useState(true);

  function submitHandler(event) {
    event.preventDefault();

    const enteredValue = enteredAmount.current.value;
    const amountEntered = +enteredValue;

    if (
      enteredValue.trim().length === 0 ||
      amountEntered < 1 ||
      amountEntered > 10
    ) {
      setAmountEnteredValid(false);
      return;
    }
    props.toAddInCart(amountEntered);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={enteredAmount}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountEnteredValid && <p>Please Enter the valid amount!(1-10).</p>}
    </form>
  );
}

export default MealItemForm;
