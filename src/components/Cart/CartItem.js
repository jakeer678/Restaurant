import "./CartItem.css";

const CartItem = (props) => {
  const price = `${props.price?.toFixed(2)}`;

  return (
    <li className="cart-item">
      <di>
        <p>{props.name}</p>
        <div>{props.origin}</div>
        <div className="summary">
          <span className="price">${price}</span>
          <span className="amount">x {props.amount}</span>
        </div>

        <div className="actions">
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </di>
    </li>
  );
};

export default CartItem;
