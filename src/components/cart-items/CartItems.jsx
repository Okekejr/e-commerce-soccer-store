import "./cart-item.css";

const CartItems = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <div className="cart-item-container">
      <img className="img-icon" src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name-cart">{name}</span>
        <p className="prices-cart">
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItems;
