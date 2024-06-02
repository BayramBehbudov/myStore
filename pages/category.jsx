import Products from "../components/products";
import CategoryList from "../components/categoryList";

import style from "../style/pages/category.module.css"

function Category() {
  return (
    <div className={style.categoryContainer}>
      <CategoryList />
      <Products />
    </div>
  );
}

export default Category;
