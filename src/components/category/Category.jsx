import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../product-card/ProductCard";
import { CategoriesContext } from "../../contexts/categoriesContext";


const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div>
      {products &&
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Category;
