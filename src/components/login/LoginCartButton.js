// import CartIcon from "../Cart/CartIcon";
import classes from "./cssFiles/logincartbutton.module.css";
import { useNavigate } from "react-router-dom";

function LoginCartButton() {
  const navigate = useNavigate();

  function buttonClickedToShowLogin() {
    navigate("/login");
  }
  return (
    <button className={classes.button} onClick={buttonClickedToShowLogin}>
      <span>Login/Sign Up</span>
    </button>
  );
}

export default LoginCartButton;
