import ProductCard from "../product-card/ProductCard";

import "./categoryPreview.css";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
