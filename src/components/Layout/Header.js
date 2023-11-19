import { Fragment } from "react";
import classes from "./cssFiles/Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import LoginCartButton from "../login/LoginCartButton";
import RotatingText from "./RotatingHeading/RotatingHeading";

function Header(props) {
  if (window.location.pathname.toLowerCase() === "/login") {
    return (
      <Fragment>
        <header className={classes.headerHeading}>
          <RotatingText />
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImg} alt="A meals" />
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <header className={classes.headerHeading}>
        <RotatingText />
        <div style={{ display: "flex" }}>
          <LoginCartButton />
          <HeaderCartButton showingCart={props.toShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A meals" />
      </div>
    </Fragment>
  );
}
export default Header;
