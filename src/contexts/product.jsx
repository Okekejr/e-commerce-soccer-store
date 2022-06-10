import { createContext, useState } from "react";

import Products from "../shop-data.json";

export const productContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};
