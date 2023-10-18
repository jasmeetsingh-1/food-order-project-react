import { Fragment } from "react";
import classes from "./cssFiles/Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton showingCart={props.toShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A meals" />
      </div>
    </Fragment>
  );
}
export default Header;
