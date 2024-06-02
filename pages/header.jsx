import React from "react";
import style from "../style/pages/header.module.css";
import Navbar from "../components/navbar.jsx";
import ShopCardIcon from "../components/shopcardIcon.jsx";
import SearchIconIcon from "../components/searchIcon.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import UseChangedElement from "../changedElement.js";

function Header() {
  const { setPageName } = UseChangedElement();

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
        
        <FontAwesomeIcon icon={faUser} className={style.profileIcon} />
        
        <FontAwesomeIcon
          icon={faHeart}
          className={style.likeIcon}
          onClick={() => setPageName("likedProdPage")}
        />
        <ShopCardIcon />
      </div>
    </div>
  );
}

export default Header;
