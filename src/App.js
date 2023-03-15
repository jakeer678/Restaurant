import React, { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// import items from "./components/Meals/Items";
import { CartProvider } from "./components/store/Context";



const App = () => {
  // const [showCart, setShowCart] = useState(false);

  // const [cartItems, setCartItems] = useState(items);

  // const addToCartItems = () => {
  //   setCartItems();
  // };

  return (
    <Fragment>
      <CartProvider>
        <Cart />

        <Header />

        <main>
          <Meals />
        </main>
      </CartProvider>
    </Fragment>
  );
};

export default App;
