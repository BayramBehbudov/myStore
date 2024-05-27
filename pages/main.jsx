import Categorie from "./category";
import About from "./about";
import Contact from "./contact";
import NewFeature from "./newFeature";
import Home from "./home";
import ProductDetail from "./productDetail.jsx";
import useChangedPage from "../changedElement.js";

import style from "../style/pages/main.module.css";

const pages = {

  category: <Categorie />,
  about: <About />,
  contact: <Contact />,
  home: <Home />,
  newFeature: <NewFeature />,
  detailPage: <ProductDetail />,
};

function main() {
  window.scrollTo(0, 0);

  const { pageName } = useChangedPage();
  return <div className={style.main}> {pages[pageName]}</div>;
}

export default main;
