import style from "../style/pages/home.module.css";
import Button from "../components/btnWithStars.jsx";
import Carousel from "../components/carousel.jsx";
import UseChangedElement from "../changedElement.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruckFast,
  faRankingStar,
  faTag,
  faFileShield,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const { setPageName } = UseChangedElement();

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

      <div className={style.discCont}>
        <div className={style.discBack}>
          <div className={style.discDesc}>
            <h3> Limited Time Offer</h3>
            <h1>Special Edition</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
            </p>
            <button
              onClick={() => {
                setPageName("discountPage");
              }}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <div className={style.services}>
        <div className={style.service}>
          <FontAwesomeIcon icon={faTruckFast}  className={style.serviceIcon} />
          <h2>Free Shipping</h2>
          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={style.service}>
          <FontAwesomeIcon icon={faRankingStar}  className={style.serviceIcon} />
          <h2>Best Quality</h2>

          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={style.service}>
          <FontAwesomeIcon icon={faTag}  className={style.serviceIcon} />
          <h2>Best Offers</h2>

          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className={style.service}>
          <FontAwesomeIcon icon={faFileShield} className={style.serviceIcon} />
          <h2>Secure Payments</h2>

          <p>
            It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
