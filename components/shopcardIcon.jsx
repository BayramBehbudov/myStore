import style from "../style/components/shopCard.module.css";
import UseChangedElement from "../changedElement.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function shopcardIcon() {
  const { shopCardItems, setPageName } = UseChangedElement();
  return (
    <div className={style.shopCardIconContainer}>
      <FontAwesomeIcon
        icon={faCartShopping}
        className={style.shopCardIcon}
        onClick={() => setPageName("shopCardPage")}
      />
      <p className={style.shopCardIconCount}>{shopCardItems.length}</p>
    </div>
  );
}

export default shopcardIcon;
