import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

export const itemContext = React.createContext(null);

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <Fragment>
      <itemContext.Provider value={{ showCart, setShowCart }}>
        <Cart />

        <Header />

        <main>
          <Meals />
        </main>
      </itemContext.Provider>
    </Fragment>
  );
};

export default App;
