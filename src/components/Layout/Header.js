import { Fragment } from "react";
import classes from "./cssFiles/Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import RotatingText from "./RotatingHeading/RotatingHeading";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <RotatingText />
        <HeaderCartButton showingCart={props.toShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A meals" />
      </div>
    </Fragment>
  );
}
export default Header;
