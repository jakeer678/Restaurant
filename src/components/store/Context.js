import React, { useState } from "react";
import itemContext from "./ContexStore";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updateItems = state.items.concat(action.item);
//     const updatetotalAmount =
//       state.totalAmount + action.item.price * action.item.quantity;
//     return {
//       items: updateItems,
//       totalAmount: updatetotalAmount,
//     };
//   }

//   return defaultCartState;
// };

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
const [items, updateItems] = useState([])
  // const [cartState, dispatchCartAction] = useReducer(
  //   cartReducer,
  //   defaultCartState
  // );

  const addItemHandler = (item) => {
    updateItems([...items,item])
    console.log(items,"jakeeeeeeeeee")
  };

  const removeItemHandler = (Id) => {
   
  };

  const cartContext = {
    items: items,
    showCart: showCart,
    setShowCart: setShowCart,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    totalAmount:55
  };

  return (
    <itemContext.Provider value={cartContext}>{children}</itemContext.Provider>
  );
};
