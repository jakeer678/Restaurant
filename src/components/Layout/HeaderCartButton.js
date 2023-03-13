import React, { Fragment, useContext } from "react";
import { itemContext } from "../../App";
import Cart from "../Cart/Cart";

import CartIcon from "../Cart/CartIcon";
import "./HederCartButton.css";

const HeaderCartButton = () => {
  const { showCart, setShowCart } = useContext(itemContext);

  const handlePopUp = () => {
    setShowCart(true);
  };

  return (
    <Fragment>
      {showCart && <Cart />}
      <button className="button" onClick={handlePopUp}>
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
