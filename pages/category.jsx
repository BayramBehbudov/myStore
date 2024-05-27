import Products from "../components/products";
import CategoryList from "../components/categoryList";

import style from "../style/pages/category.module.css"

function category() {
  return (
    <div className={style.categoryContainer}>
      <CategoryList />
      <Products />
    </div>
  );
}

export default category;
