import React from "react";
import setSelectedItem from "../changedElement.js";
import ProductItem from "../components/productCard.jsx";
import style from "../style/components/likeIcon.module.css";

function likedProdPage() {
  const { likedProducts } = setSelectedItem();
  if (likedProducts.length == 0) {
    return <div className={style.container}>liked products empty</div>;
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
