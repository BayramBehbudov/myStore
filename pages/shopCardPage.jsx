import style from "../style/components/shopCard.module.css";
import Table from "../components/table.jsx";
import UseChangedElement from "../changedElement.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function ShopCardPage() {
  const { setPageName } = UseChangedElement();
  return (
    <div className={style.shopCardPageContainer}>
      <h1>Your Shopping Card</h1>
      <Table />
      <div className={style.shopCardFooter}>
        <button
          className={style.backShopBtn}
          onClick={() => {
            setPageName("category");
          }}
        >
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className={style.arrowLeftIcon}
          />
          Back to shop
        </button>
      </div>
    </div>
  );
}

export default ShopCardPage;
