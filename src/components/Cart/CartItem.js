import "./CartItem.css";

const CartItem = (props) => {
  const price = `${props.price?.toFixed(2)}`;

  return (
    <li className="cart-item">
      <div>
        <div className="item_price">
          <div>
            <img className="image_first" src={props.image} alt="imag" />
            <div>{props.name}</div>
            <span className="price">${price}</span>
            <span className="amount">x {props.amount}</span>
            <div>{props.origin}</div>
          </div>

          <div className="actions">
            <button onClick={props.onRemove}>−</button>
            <button onClick={props.addItem}>+</button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
