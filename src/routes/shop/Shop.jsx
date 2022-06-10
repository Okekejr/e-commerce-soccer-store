import { useContext } from "react";
import ProductCard from "../../components/product-card/ProductCard";

import { productContext } from "../../contexts/product";

import "./shop.css";

export default function Shop() {
  const { products } = useContext(productContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
