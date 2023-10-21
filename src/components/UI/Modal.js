import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./cssFiles/Modal.module.css";

function Modal(props) {
  function Backdrop() {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  }

  function ModalOverLay(props) {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  }

  const portalElement = document.getElementById("cart-modal");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
