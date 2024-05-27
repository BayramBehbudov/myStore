import style from "../style/components/review.module.css";
import Stars from "./stars";

function reviews({ reviews }) {

  // function inputValue(className) {
  //   let value = document.querySelector(`.${className}`);
  //   return value;
  // }

  // function reviewSetBtn() {
  //   const reviewerName = inputValue("reviewerName");
  //   const comment = inputValue("commentInput");
  //   const formattedDate = new Date().toISOString().slice(0, 10);
  //   const data = {
  //     reviewerName,
  //     comment,
  //     formattedDate,
  //     rating: 5,
  //   };
  // }

  return (
    <div className={style.reviewContainer}>
      <div className={style.inputs}>
        <div className={style.inputSection}>
          <input type="text" placeholder="Full Name" className="reviewerName" />
          <input type="email" placeholder="Email" />
          <div className={style.rate}>
            <p>Rate: </p>
            <div className={style.stars}>
              <img src="../img/starwhite.png" alt="" rate="1" />
              <img src="../img/starwhite.png" alt="" rate="2" />
              <img src="../img/starwhite.png" alt="" rate="3" />
              <img src="../img/starwhite.png" alt="" rate="4" />
              <img src="../img/starwhite.png" alt="" rate="5" />
            </div>
          </div>
        </div>
        <div className={style.inputSection}>
          <input
            type="text"
            placeholder="Comment"
            className={style.commentInput}
          />
        </div>
        <button
          onClick={() => {
            reviewSetBtn();
          }}
        >
          Comment
        </button>
      </div>

      <div className={style.reviews}>
        {reviews.map((review, index) => {
          return (
            <div key={index} className={style.reviewItem}>
              <div className={style.reviewSection}>
                <p className={style.reviewerName}>{review.reviewerName}</p>
                <Stars stars={review.rating} />
                <p>{review.date.slice(0, 10)}</p>
              </div>
              <div className={style.comment}>{review.comment}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default reviews;
