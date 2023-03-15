import React, { useReducer, useState } from "react";
import itemContext from "./ContexStore";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateItems = state.items.concat(action.item);
    const updatetotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: updateItems,
      totalAmount: updatetotalAmount,
    };
  }

  return defaultCartState;
};

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemHandler = (Id) => {
    dispatchCartAction({ type: "REMOVE", id: Id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    showCart: showCart,
    setShowCart: setShowCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <itemContext.Provider value={cartContext}>{children}</itemContext.Provider>
  );
};
