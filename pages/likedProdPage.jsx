import setSelectedItem from "../changedElement.js";
import ProductItem from "../components/productCard.jsx";
import style from "../style/components/likeIcon.module.css";
import Button from "../components/btnWithStars.jsx";

function likedProdPage() {
  const { likedProducts } = setSelectedItem();

  if (likedProducts.length == 0) {
    return (
      <div className={style.container}>
        <div className={style.context}>
          <h1>You haven't liked any products yet</h1>
          <Button />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.container}>
        {likedProducts.map((prod) => (
          <ProductItem product={prod} key={prod.sku} />
        ))}
      </div>
    );
  }
}

export default likedProdPage;
