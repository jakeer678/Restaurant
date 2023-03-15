import React, { Fragment, useContext } from "react";

import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import itemContext from "../store/ContexStore";
import "./HederCartButton.css";

const HeaderCartButton = () => {
  const { showCart, setShowCart } = useContext(itemContext);
  const CartCtx = useContext(itemContext);
  const handlePopUp = () => {
    setShowCart(true);
  };

  let quantity = 0;
  CartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
    console.log(quantity, "mallaapa");
  });

  return (
    <Fragment>
      {showCart && <Cart />}
      <button className="button" onClick={handlePopUp}>
        <span className="icon">
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className="badge">{quantity}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
