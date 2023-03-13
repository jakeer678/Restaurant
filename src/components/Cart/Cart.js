import Modal from "../UI/Modal";
import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cartItems = [{ id: 1, name: "Chicken-Burgar", amount: 2, price: 22 }];

  return (
    <Modal>
      <div className="cart-item">
        {cartItems?.map((item) => (
          <div key={item?.id}>
            <div>{item?.name}</div>
          </div>
        ))}
        <div className="total">
          <span>Total Amount</span>
          <span>28</span>
        </div>
        <div className="actions">
          <button className="button_clo">Close</button>
          <button className="button_ord">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
