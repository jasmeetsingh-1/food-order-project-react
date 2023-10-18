import React from "react";
import classes from "./cssFiles/Input.module.css";

const Input = React.forwardRef(function Input(props, ref) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

export default Input;
