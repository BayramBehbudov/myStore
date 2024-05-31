import setSelectedElement from "../changedElement.js";
import style from "../style/components/productDetails.module.css";
import ReviewsPage from "../components/reviews.jsx";
import React, { useState } from "react";
import Stars from "../components/star.jsx";
import LikeIcon from "../components/likeIcon.jsx";

function productDetail() {
  const { selectedProduct, shopCardItems } = setSelectedElement();

  const [count, setCount] = useState(1);

  const {
    title,
    image,
    brand,
    discountPercentage,
    price,
    returnPolicy,
    warrantyInformation,
    description,
    tags,
    reviews,
    rating,
  } = selectedProduct;

  function addToCard() {
    setCount("1");
    const product = {
      title,
      image,
      price,
      count,
      discountPercentage,
    };

    if (shopCardItems.length != 0) {
      if (
        shopCardItems.some((item) => {
          return item.title === product.title;
        })
      ) {
        shopCardItems.forEach((prod) => {
          prod.title === product.title ? (prod.count = product.count) : "";
        });
      } else {
        shopCardItems.push(product);
      }
    } else {
      shopCardItems.push(product);
    }
  }

  return (
    <div className={style.prodContainer}>
      <div className={style.leftSect}>
        <div className={style.imgContainer}>
          <img src={image} alt="" />
          <LikeIcon prod={selectedProduct} />
        </div>
      </div>
      <div className={style.rightSect}>
        <div className={style.rightCont}>
          {brand && (
            <div>
              <p>Brand:</p>
              <span>{brand}</span>
            </div>
          )}

          {discountPercentage && (
            <div>
              {" "}
              <p>Discount:</p>
              <span>{discountPercentage}%</span>
            </div>
          )}

          <div>
            <p>Price:</p>
            <span>{price}$</span>
          </div>

          {returnPolicy && (
            <div>
              <p>Return Policy:</p>
              <span>{returnPolicy}</span>
            </div>
          )}

          {warrantyInformation && (
            <div>
              <p>Warranty:</p>
              <span>{warrantyInformation}</span>
            </div>
          )}

          <div>
            <p>{description}</p>
          </div>
          <div className={style.detailContFooter}>
            <div className={style.detailContLeftFooter}>
              {tags?.map((tag) => {
                return <i key={tag}>#{tag}</i>;
              })}
            </div>

            <div className={style.detailFooterRightSection}>
              <div>
                <button
                  onClick={() =>
                    setCount((count) => (count > 1 ? count - 1 : 1))
                  }
                >
                  -
                </button>
                <p className="count">{count}</p>
                <button onClick={() => setCount((count) => count + 1)}>
                  +
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    addToCard();
                  }}
                  className={style.addCardBtn}
                >
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.prodName}>
        <p>{title}</p>
      </div>

      <div className={style.starRaitings}>
        <div>
          <Stars stars={rating} />
        </div>
        <p>Raitings: {rating}</p>
      </div>

      <ReviewsPage reviews={reviews} />
    </div>
  );
}

export default productDetail;
