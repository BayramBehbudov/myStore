import setSelectedElement from "../changedElement.js";
import style from "../style/components/productDetails.module.css";
import Stars from "../components/stars.jsx";
import ReviewsPage from "../components/reviews.jsx";
import React, { useState } from "react";

function productDetail() {
  const { selectedProduct, shopCardItems } = setSelectedElement();

  const [count, setCount] = useState(1);

  const {
    title,
    images,
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
    const product = {
      title,
      images,
      price,
      count,
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
        <img src={images[0]} alt="" />
      </div>
      <div className={style.rightSect}>
        <div className={style.rightCont}>
          <div>
            <p>Brand:</p>
            <span>{brand}</span>
          </div>
          <div>
            {" "}
            <p>Discount:</p>
            <span>{discountPercentage}%</span>
          </div>
          <div>
            <p>Price:</p>
            <span>{price}$</span>
          </div>
          <div>
            <p>Return Policy:</p>
            <span>{returnPolicy}</span>
          </div>

          <div>
            <p>Warranty:</p>
            <span>{warrantyInformation}</span>
          </div>
          <div>
            <p>{description}</p>
          </div>

          <div className={style.detailContFooter}>
            <div className={style.detailContLeftFooter}>
              {tags.map((tag) => {
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
