import style from "../style/components/navbar.module.css";
import UseChangedElement from "../changedElement.js";

function Navbar() {
  const { setPageName, pageName, setCategory } = UseChangedElement();

  return (
    <nav className={style.nav}>
      <ul className={style.navbar}>
        <li>
          <a
            href="#home"
            className={pageName == "home" ? style.activePage : ""}
            onClick={() => setPageName("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#DiscountPage"
            onClick={() => {
              setCategory("All");
              setPageName("discountPage");
            }}
            className={pageName == "discountPage" ? style.activePage : ""}
          >
            Discount Here
          </a>
        </li>
        <li>
          <a
            href="#Category"
            className={pageName == "category" ? style.activePage : ""}
            onClick={() => setPageName("category")}
          >
            Category
          </a>
        </li>
        <li>
          <a
            href="#About"
            className={pageName == "about" ? style.activePage : ""}
            onClick={() => setPageName("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className={pageName == "contact" ? style.activePage : ""}
            onClick={() => setPageName("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
