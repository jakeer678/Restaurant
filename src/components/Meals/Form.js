import React, { Fragment } from "react";
import "./Form.css";

const Form = () => {
  return (
    <Fragment>
      <div className="input_enter">
        <label>Amount</label>
        <input type="number" step="1" min="1" max="5" defaultValue="1" />
      </div>
      <div className="add_button">
        <button type="submit">+Add</button>
      </div>
    </Fragment>
  );
};

export default Form;
