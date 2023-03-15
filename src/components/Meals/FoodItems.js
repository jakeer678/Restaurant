import "./FoodItem.css";
import Form from "./Form";
import Card from "../UI/Card";
import items from "./Items";

const FoodItems = (props) => {
  return (
    <Card>
      {items?.map((item) => (
        <div className="list" key={item.name}>
          <div>
            <img src={item?.image} className="image_1" alt="burgar" />

            <li className="first_list">{item?.name}</li>
            <li className="second_list">{item?.origin}</li>
            <li className="third_list"> ${item?.price}</li>
          </div>
          <div className="form">
            <Form id={item.id} item={item} />
            {console.log(item, "kkkkkkkk")}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default FoodItems;
