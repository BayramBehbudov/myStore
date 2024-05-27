import React from "react";
import style from "../style/pages/header.module.css";
import Navbar from "../components/navbar";

function header() {
  return (
    <div className={style.header}>
      <div className={style.storeName}>
        <p>Fashion Store</p>
      </div>
      <div className={style.navBar}>
        <Navbar />
      </div>
      <div className={style.icons}>
        <div>
          <img src="../img/searchicon.svg" alt="" />
          <img src="../img/usericon.svg" alt="" />
          <img src="../img/heart.svg" alt="" />
          <img src="../img/shopcard.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default header;
