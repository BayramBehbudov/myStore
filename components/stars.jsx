import style from "../style/components/stars.module.css";



function Stars({ stars }) {
  let arr = [];

  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(stars)) {
      arr.push(<img key={i} src="../img/star.png" alt="" />);
    } else if (i == Math.floor(stars) && stars - Math.floor(stars) != 0) {
      arr.push(<img key={i} src="../img/halfstar.png" alt="" />);
    } else {
      arr.push(<img key={i} src="../img/starwhite.png" alt="" />);
    }
  }
  return <div className={style.stars}>{arr.map((star) => star)}</div>;
}

export default Stars;
