import React from "react";
import style from "../style/pages/header.module.css";
import Navbar from "../components/navbar";
import ShopCardIcon from "../components/shopcardIcon.jsx";
import SearchIconIcon from "../components/searchIcon.jsx";

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
        <SearchIconIcon />
        <img src="../img/usericon.svg" alt="" />
        <img src="../img/heart.svg" alt="" />
        <ShopCardIcon />
      </div>
    </div>
  );
}

export default header;
