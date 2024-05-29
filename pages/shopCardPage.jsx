import style from "../style/components/shopCard.module.css";
import Table from "../components/table.jsx";
import useChangeElement from "../changedElement.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

function shopCardPage() {
  const { setPageName } = useChangeElement();
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
          />{" "}
          Back to shop
        </button>
      </div>
    </div>
  );
}

export default shopCardPage;
