import React from "react";
import items from "./Items";
import "./FoodItem.css";
import Form from "./Form";
import Card from "../UI/Card";

const FoodItems = () => {
  return (
    <Card>
      {items?.map((item) => (
        <div className="list" key={item.id}>
          <div>
            <img src={item?.image} className="image_1" alt="burgar" />

            <li className="first_list">{item?.name}</li>
            <li className="second_list">{item?.origin}</li>
            <li className="third_list">{item?.price}</li>
          </div>
          <div className="form">
            <Form />
          </div>
        </div>
      ))}
    </Card>
  );
};

export default FoodItems;
