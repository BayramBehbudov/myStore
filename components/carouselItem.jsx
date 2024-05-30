import React from "react";
import style from "../style/components/carousel.module.css";
import UseChangedElement from "../changedElement";

function CarouselItem({ data: { img, title, desc }, isVisible }) {
  const { setPageName, setCategory } = UseChangedElement();

  function textStartUppercase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  return (
    <div
      className={`${style.carouselItem} ${isVisible ? style.isVisible : ""}`}
    >
      <img src={img} className={style.background} alt={title} />
      <div className={style.description}>
        <h1 className={style.title}>{textStartUppercase(title)}</h1>
        <p className={style.desc}>{textStartUppercase(desc)}</p>
        <button
          className={style.btn}
          onClick={() => {
            setPageName("category");
            setCategory("All");
          }}
        >
          {textStartUppercase(title)}
        </button>
      </div>
    </div>
  );
}

export default CarouselItem;
