import React from "react";
import style from "../style/pages/header.module.css";
import Navbar from "../components/navbar";
import ShopCardIcon from "../components/shopcardIcon.jsx";
import SearchIconIcon from "../components/searchIcon.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";



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
        <FontAwesomeIcon icon={faUser} className={style.profileIcon}/>
        <FontAwesomeIcon icon={faHeart} className={style.likeIcon} />
        <ShopCardIcon />
      </div>
    </div>
  );
}

export default header;
