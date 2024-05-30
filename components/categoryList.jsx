import style from "../style/components/categorylist.module.css";
import useSelectedCategory from "../changedElement.js";
import { AllProductsData } from "../allProducts.jsx";

const allCategory = [];

AllProductsData.forEach((data) => {
  if (!allCategory.includes(data.category)) {
    allCategory.push(data.category);
  }
});
function category() {
  const { setCategory, selectedCategory } = useSelectedCategory();
  return (
    <div className={style.categoryListCont}>
      <button
        className={`${style.leftCategoryList} ${
          selectedCategory == "All" ? style.activeBtn : ""
        }`}
        onClick={() => setCategory("All")}
      >
        All Products
      </button>
      <div className={style.rightCategoryList}>
        {allCategory.map((category) => (
          <button
            key={category}
            className={selectedCategory == category ? style.activeBtn : ""}
            onClick={() => setCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default category;
