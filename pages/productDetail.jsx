import setSelectedElement from "../changedElement.js";
import style from "../style/components/productDetails.module.css";
import Stars from "../components/stars.jsx";
import ReviewsPage from "../components/reviews.jsx";
import React, { useState } from "react";

function productDetail() {
  const { selectedProduct } = setSelectedElement();
  const [count, setCount] = useState(1);
  let reviewsData = selectedProduct.reviews;
  return (
    <div className={style.prodContainer}>
      <div className={style.leftSect}>
        <img src={selectedProduct.images[0]} alt="" />
      </div>
      <div className={style.rightSect}>
        <div className={style.rightCont}>
          <div>
            <p>Brand:</p>
            <span>{selectedProduct.brand}</span>
          </div>
          <div>
            {" "}
            <p>Discount:</p>
            <span>{selectedProduct.discountPercentage}%</span>
          </div>
          <div>
            <p>Price:</p>
            <span>{selectedProduct.price}$</span>
          </div>
          <div>
            <p>Return Policy:</p>
            <span>{selectedProduct.returnPolicy}</span>
          </div>

          <div>
            <p>Warranty:</p>
            <span>{selectedProduct.warrantyInformation}</span>
          </div>
          <div>
            <p>{selectedProduct.description}</p>
          </div>

          <div className={style.detailContFooter}>
            <div className={style.detailContLeftFooter}>
              {selectedProduct.tags.map((tag) => {
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
                <button className={style.addCardBtn}>Add to card</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.prodName}>
        <p>{selectedProduct.title}</p>
      </div>

      <div className={style.starRaitings}>
        <div>
          <Stars stars={selectedProduct.rating} />
        </div>
        <p>Raitings: {selectedProduct.rating}</p>
      </div>

      <ReviewsPage reviews={reviewsData} />
    </div>
  );
}

export default productDetail;
