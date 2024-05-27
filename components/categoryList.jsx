import style from "../style/components/categorylist.module.css";
import selectedCategory from "../changedElement.js";

function category() {
  const { setCategory } = selectedCategory();
  return (
    <div className={style.categoryListCont}>
      <button
        className={style.leftCategoryList}
        onClick={() => setCategory("All")}
      >
        All Products
      </button>
      <div className={style.rightCategoryList}>
        <button onClick={() => setCategory("beauty")}>Beauty</button>
        <button onClick={() => setCategory("fragrances")}>Fragrances</button>
        <button onClick={() => setCategory("furniture")}>Furniture</button>
        <button onClick={() => setCategory("groceries")}>Groceries</button>
        <button onClick={() => setCategory("All")}>Category 5</button>
        <button onClick={() => setCategory("All")}>Category 6</button>
        <button onClick={() => setCategory("All")}>Category 7</button>
        <button onClick={() => setCategory("All")}>Category 8</button>
        <button onClick={() => setCategory("All")}>Category 9</button>
        <button onClick={() => setCategory("All")}>Category 10</button>
      </div>
    </div>
  );
}

export default category;
