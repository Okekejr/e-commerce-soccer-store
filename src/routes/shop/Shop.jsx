import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categoriesPreview";
import Category from '../../components/category/Category'

import "./shop.css";

export default function Shop() {
  return (
    <div className="products-container">
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </div>
  );
}
