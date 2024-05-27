import React from "react";
import style from "../style/pages/footer.module.css";
import changePage from "../changedElement.js";

const Footer = () => {
  const { setPageName } = changePage();

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.section}>
          <h2 className={style.heading} onClick={() => setPageName("home")}>
            Fashion Store
          </h2>
        </div>
        <div className={style.section}>
          <h3 className={style.subheading}>Follow Us:</h3>
          <div className={style.icons}>
            <a href="#" className={style.icon}>
              facebook
            </a>
            <a href="#" className={style.icon}>
              tvitter
            </a>
            <a href="#" className={style.icon}>
              instagram
            </a>
          </div>
        </div>
        <div className={style.section}>
          <h3 className={style.subheading}>Contact me:</h3>
          <a className={style.contact} href="mailto:bayram.behbudov@gmail.com">
            bayram.behbudov@gmail.com
          </a>
        </div>
        <div className={style.section}>
          <h3 className={style.subheading}>Pages:</h3>
          <ul className={style.list}>
            <li>
              <a href="#Home" onClick={() => setPageName("home")}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#New & Featured"
                onClick={() => setPageName("newFeature")}
              >
                New & Featured
              </a>
            </li>
            <li>
              <a href="#Category" onClick={() => setPageName("category")}>
                Category
              </a>
            </li>
            <li>
              <a href="#About" onClick={() => setPageName("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setPageName("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={style.section}>
          <h3 className={style.subheading}>Policy Legacy:</h3>
          <p>
            <a href="#policy">Privacy Policy</a>
          </p>
          <p>
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
