import React, { Fragment } from "react";
import FoodItems from "./FoodItems";

import Summary from "./Summary";

const Meals = () => {
  return (
    <Fragment>
      <Summary />
      <FoodItems />
    </Fragment>
  );
};

export default Meals;
