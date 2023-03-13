import React from "react";
import items from "./Items";
import "./FoodItem.css";
import Form from "./Form";

const FoodItems = () => {
  return (
    <>
      {console.log(items, "jakkaka")}
      <ul className="item">
        {items.map((item) => (
          <div className="list" key={item.id}>
            <div>
              <li className="first_list">{item.name}</li>
              <li className="second_list">{item.origin}</li>
              <li className="third_list">{item.price}</li>
            </div>
            <div>
              <Form />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
