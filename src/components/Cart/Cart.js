import Modal from "../UI/Modal";
import React, { useContext } from "react";
import "./Cart.css";
import itemContext from "../store/ContexStore";
import CartItem from "./CartItem";

const Cart = () => {
  const { showCart, setShowCart, removeItem, addItem } =
    useContext(itemContext);

  const cartCtx = useContext(itemContext);

  const Total = cartCtx.items.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);

  const handlePopUp = () => {
    setShowCart(false);
  };
  const cartItem = (
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        <CartItem
          key={item?.id}
          name={item?.name}
          amount={item?.quantity}
          origin={item?.origin}
          image={item?.image}
          price={item?.price}
          onRemove={() => removeItem(item.id)}
          addItem={() => addItem(item)}
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
