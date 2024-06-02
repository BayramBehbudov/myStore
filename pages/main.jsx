import Categorie from "./category";
import About from "./about";
import Contact from "./contact";
import DiscountPage from "./discountPage.jsx";
import Home from "./home";
import ProductDetail from "./productDetail.jsx";
import ShopCardPage from "./shopCardPage.jsx";
import LikedProdPage from "./likedProdPage.jsx";

import UseChangedElement from "../changedElement.js";

import style from "../style/pages/main.module.css";

const pages = {
  category: <Categorie />,
  about: <About />,
  contact: <Contact />,
  home: <Home />,
  discountPage: <DiscountPage />,
  detailPage: <ProductDetail />,
  shopCardPage: <ShopCardPage/>,
  likedProdPage: <LikedProdPage/>,
};

function Main() {
  window.scrollTo(0, 0);

  const { pageName } = UseChangedElement();
  return <div className={style.main}> {pages[pageName]}</div>;
}

export default Main;
