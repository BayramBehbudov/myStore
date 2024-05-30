import React from "react";
import style from "../style/components/carousel.module.css";
import UseChangedElement from "../changedElement";

function CarouselItem({ data: { img, title, desc, btn }, isVisible }) {
  const { setPageName, setCategory } = UseChangedElement();
  return (
    <div
      className={`${style.carouselItem} ${isVisible ? style.isVisible : ""}`}
    >
      <img src={img} className={style.background} alt={title} />
      <div className={style.description}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.desc}>{desc}</p>
        <button
          className={style.btn}
          onClick={() => {
            setPageName("category");
            setCategory(title);
          }}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

export default CarouselItem;
