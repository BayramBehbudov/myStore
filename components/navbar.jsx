import style from "../style/components/navbar.module.css";
import changePage from "../changedElement.js";

function navbar() {
  const { setPageName } = changePage();

  return (
    <nav className={style.nav}>
      <ul className={style.navbar}>
        <li>
          <a href="#home" className="home" onClick={() => setPageName("home")}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#New & Featured"
            className="new-Featured"
            onClick={() => setPageName("newFeature")}
          >
            New & Featured
          </a>
        </li>
        <li>
          <a
            href="#Category"
            className="category"
            onClick={() => setPageName("category")}
          >
            Category
          </a>
        </li>
        <li>
          <a href="#About" className="about" onClick={() => setPageName("about")}>
            About
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            className="contact"
            onClick={() => setPageName("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default navbar;
