import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import style from "../style/components/likeIcon.module.css";
import UseChangedElement from "../changedElement.js";

function LikeIcon(prod) {
  const [isClicked, setIsClicked] = useState(false);
  const { likedProducts } = UseChangedElement();

  if (likedProducts.length != 0 && !isClicked) {
    likedProducts.forEach((product) => {
      product == prod.prod && setIsClicked(!isClicked);
    })
  }

  const likeProduct = () => {
    setIsClicked(!isClicked);

    if (likedProducts.length != 0) {
      if (likedProducts.some((item) => item.title === prod.prod.title)) {
        likedProducts.splice(likedProducts.indexOf(prod.prod), 1);
      } else {
        likedProducts.push(prod.prod);
      }
    } else {
      likedProducts.push(prod.prod);
    }
  };
  return (
    <FontAwesomeIcon
      icon={faHeart}
      onClick={likeProduct}
      className={`${style.likeIcon} ${isClicked && style.likeActive}`}
    />
  );
}

export default LikeIcon;

