import style from "../style/pages/home.module.css";
import Button from "../components/btnWithStars.jsx";
import Carousel from "../components/carousel.jsx";

function home() {
  return (
    <div className={style.homeCotainer}>
      <div className={style.homeTop}>
        <div className={style.topContainer}>
          <h1 className={style.topTitle}>Find Your Fashion</h1>
          <Button />
        </div>
      </div>
      <div className={style.collectionsContainer}>
        <Carousel />
      </div>
    </div>
  );
}

export default home;
