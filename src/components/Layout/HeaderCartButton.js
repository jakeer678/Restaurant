import React, { Fragment } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HederCartButton.css";

const HeaderCartButton = () => {
  return (
    <Fragment>
      <button className="button">
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">3</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
