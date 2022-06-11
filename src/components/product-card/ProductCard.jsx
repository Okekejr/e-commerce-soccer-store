import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);
  const addProductToCart = () => addItemsToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name-product">{name}</span>
        <span className="price-cart">{price}</span>
      </div>
      <button type="submit" className="shopBtn" onClick={addProductToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
