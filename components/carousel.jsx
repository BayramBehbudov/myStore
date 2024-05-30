import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "../style/components/carousel.module.css";
import CarouselItem from "../components/carouselItem.jsx";
import { useState } from "react";

const carouselData = [
  {
    img: "https://t3.ftcdn.net/jpg/03/26/76/86/240_F_326768634_DG1g2i6zbe9D1HQAIoIRPxv8kqDKSpyV.jpg",
    title: "beauty",
    desc: "beaty desc",
    btn: "Beaty",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/20/61/29/240_F_420612964_65MvCNPGW52GEPNMbycspxsX6ZEXW56S.jpg",
    title: "fragrances",
    desc: "Fragrances desc",
    btn: "Fragrances",
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/33/01/28/240_F_333012811_8woB62pzBYSdjsloH9cbD8rkpGgIhbpg.jpg",
    title: "jewelery",
    desc: "jewelry desc",
    btn: "jewelry",
  },
//   {
//     img: "https://t3.ftcdn.net/jpg/03/33/01/28/240_F_333012811_8woB62pzBYSdjsloH9cbD8rkpGgIhbpg.jpg",
//     title: "jewelry",
//     desc: "jewelry desc",
//     btn: "jewelry",
//   },
];

function carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? carouselData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === carouselData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselItems}>
        <FontAwesomeIcon
          icon={faChevronLeft}
          className={style.chevron}
          onClick={goToPrevious}
        />

        <div className={style.carousel}>
          {carouselData.map((item, index) => (
            <CarouselItem
              key={item.title}
              data={item}
              isVisible={index === currentIndex}
            />
          ))}
        </div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={style.chevron}
          onClick={goToNext}
        />
      </div>
    </div>
  );
}

export default carousel;
