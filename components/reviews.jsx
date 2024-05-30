import style from "../style/components/review.module.css";
import Stars from "./star.jsx";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
let data;

function reviews({ reviews }) {
  const [reviewerName, setNameInputValue] = useState("");
  const [reviewerEmail, setEmailInputValue] = useState("");
  const [comment, setCommentInputValue] = useState("");
  const [rating, setRate] = useState();

  function reviewSetBtn() {
    const date = new Date().toISOString();
    const data = {
      reviewerName,
      reviewerEmail,
      comment,
      date,
      rating,
    };

    reviews.push(data);

    setNameInputValue("");
    setEmailInputValue("");
    setCommentInputValue("");
    setRate("0");
  }
  return (
    <div className={style.reviewContainer}>
      <div className={style.inputs}>
        <div className={style.inputSection}>
          <input
            type="text"
            placeholder="Full Name"
            value={reviewerName}
            className="reviewerName"
            onChange={(e) => {
              setNameInputValue(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={reviewerEmail}
            onChange={(e) => {
              setEmailInputValue(e.target.value);
            }}
          />
          <div className={style.rate}>
            <p>Rate: </p>
            <div className={style.stars}>
              <FontAwesomeIcon
                className={`${style.star} ${rating >= 1 && style.active}`}
                icon={faStar}
                onClick={() => {
                  setRate("1");
                }}
              />
              <FontAwesomeIcon
                className={`${style.star} ${rating >= 2 && style.active}`}
                icon={faStar}
                onClick={() => {
                  setRate("2");
                }}
              />
              <FontAwesomeIcon
                className={`${style.star} ${rating >= 3 && style.active}`}
                icon={faStar}
                onClick={() => {
                  setRate("3");
                }}
              />
              <FontAwesomeIcon
                className={`${style.star} ${rating >= 4 && style.active}`}
                icon={faStar}
                onClick={() => {
                  setRate("4");
                }}
              />
              <FontAwesomeIcon
                className={`${style.star} ${rating >= 5 && style.active}`}
                icon={faStar}
                onClick={() => {
                  setRate("5");
                }}
              />
            </div>
          </div>
        </div>
        <div className={style.inputSection}>
          <textarea
            type="text"
            rows={4}
            value={comment}
            placeholder="Comment"
            className={style.commentInput}
            onChange={(e) => {
              setCommentInputValue(e.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            reviewSetBtn(e.target.value);
          }}
        >
          Comment
        </button>
      </div>

      <div className={style.reviews}>
        {reviews?.map((review, index) => {
          return (
            <div key={index} className={style.reviewItem}>
              <div className={style.reviewSection}>
                <p className={style.reviewerName}>
                  {review.reviewerName ? review.reviewerName : "Anonim"}
                </p>
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
