import React from "react";
import items from "./Items";
import './FoodItem.css'

const FoodItems = () => {
  return (
    <>
      {console.log(items, "jakkaka")}
      <ul  className="item">
        {items.map((item) => (
          <div key={item.id}>
            <li className="first_list">{item.name}</li>
            <li className="second_list">{item.origin}</li>
            <li className="third_list">{item.price}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
