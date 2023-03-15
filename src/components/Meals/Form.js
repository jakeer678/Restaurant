import Input from "../UI/Input";
import React, { Fragment, useContext } from "react";
import itemContext from "../store/ContexStore";
import "./Form.css";

const Form = (props) => {
  const cartCtx = useContext(itemContext);

  const handleAddItems = (e) => {
    e.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <Fragment>
      <div className="input_enter">
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            defaultValue: "1",
          }}
        />
      </div>
      <div className="add_button">
        <button type="submit" onClick={handleAddItems}>
          +Add
        </button>
      </div>
    </Fragment>
  );
};

export default Form;
