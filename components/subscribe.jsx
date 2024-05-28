import style from "../style/components/subscribe.module.css";
import React, { useRef } from "react";

function subscribe() {
  const handleSubscribe = () => {
    console.log(inputRef.current.value);
  };
  const inputRef = useRef(null);
  return (
    <>
      <h2>Get our special prices & latest units info from us</h2>
      <div className={style.subCont}>
        <input
          ref={inputRef}
          type="email"
          placeholder="Enter your email adress"
          className={style.subscribeInput}
        />
        <button onClick={handleSubscribe} className={style.subscribeButton}>
          Subscribe
        </button>
      </div>
    </>
  );
}

export default subscribe;
