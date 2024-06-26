import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import style from "../style/components/carousel.module.css";
import CarouselItem from "./carouselItem.jsx";
import { useState } from "react";

const carouselData = [
  {
    img: "https://t3.ftcdn.net/jpg/03/26/76/86/240_F_326768634_DG1g2i6zbe9D1HQAIoIRPxv8kqDKSpyV.jpg",
    title: "Slide 1",
    desc: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae eaque, rerum modi quam fugit vel",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/20/61/29/240_F_420612964_65MvCNPGW52GEPNMbycspxsX6ZEXW56S.jpg",
    title: "Slide 2",
    desc: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae eaque, rerum modi quam fugit vel",
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/33/01/28/240_F_333012811_8woB62pzBYSdjsloH9cbD8rkpGgIhbpg.jpg",
    title: "Slide 3",
    desc: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae eaque, rerum modi quam fugit vel",
  },
  {
    img: "https://t4.ftcdn.net/jpg/04/20/61/29/240_F_420612964_65MvCNPGW52GEPNMbycspxsX6ZEXW56S.jpg",
    title: "Slide 4",
    desc: "lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo molestiae eaque, rerum modi quam fugit vel",
  },
];

function Carousel() {
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

          {/* <CarouselItem
            key={"data" + { currentIndex }}
            data={carouselData[currentIndex]}
            isVisible={currentIndex}
          />
          <CarouselItem
            key={"data" + { currentIndex }}
            data={carouselData[currentIndex + 1]}
            isVisible={currentIndex}
          />
          <CarouselItem
            key={"data" + { currentIndex }}
            data={carouselData[currentIndex + 2]}
            isVisible={currentIndex}
          /> */}
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

export default Carousel;
