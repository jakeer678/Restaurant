import "./FoodItem.css";
import Form from "./Form";
import Card from "../UI/Card";
import items from "./Items";
import itemContext from "../store/ContexStore";
import { useContext } from "react";

const FoodItems = () => {
  const cartCtx = useContext(itemContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: items.id,
      name: items.name,
      amount: amount,
      price: items.price,
    });
  };

  return (
    <Card>
      {items?.map((item) => (
        <div className="list" key={item.id}>
          <div>
            <img src={item?.image} className="image_1" alt="burgar" />

            <li className="first_list">{item?.name}</li>
            <li className="second_list">{item?.origin}</li>
            <li className="third_list"> ${item?.price}</li>
          </div>
          <div className="form">
            <Form
              id={items.id}
              item={items}
              addToCartHandler={addToCartHandler}
            />
            {console.log(items, "lllllll")}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default FoodItems;
