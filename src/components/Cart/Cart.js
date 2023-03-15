import Modal from "../UI/Modal";
import React, { useContext } from "react";
import "./Cart.css";
import itemContext from "../store/ContexStore";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, setShowCart } = useContext(itemContext);

  const cartCtx = useContext(itemContext);

  const Total = `${cartCtx.totalAmount?.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const handlePopUp = () => {
    setShowCart(false);
  };
  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    showCart && (
      <Modal>
        {cartItem}
        <div className="total">
          <span>Total Amount</span>
          <span>${Total}</span>
        </div>
        <div className="actions">
          <button className="button_clo" onClick={handlePopUp}>
            Close
          </button>
          <button className="button_ord">Order</button>
        </div>
      </Modal>
    )
  );
};

export default Cart;
