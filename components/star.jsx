import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import style from "../style/components/stars.module.css";

function st({ stars }) {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(stars)) {
      arr.push(
        <FontAwesomeIcon
          icon={faStar}
          className={`${style.active} ${style.starItem}`}
        />
      );
    } else if (i == Math.floor(stars) && stars - Math.floor(stars) != 0) {
      arr.push(
        <FontAwesomeIcon
          icon={faStarHalfStroke}
          className={`${style.active} ${style.starItem}`}
        />
      );
    } else {
      arr.push(<FontAwesomeIcon icon={faStar} className={style.starItem} />);
    }
  }
  return <div className={style.stars}>{arr.map((star) => star)}</div>;
}

export default st;
