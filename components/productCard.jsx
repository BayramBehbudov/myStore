import style from "../style/components/products.module.css";
import UseChangedElement from "../changedElement.js";
import LikeIcon from "./likeIcon.jsx";

const ProductItem = ({ product }) => {
  const { setPageName, setProduct } = UseChangedElement();
    return (
      <div className={style.card}>
        <div className={style.cardimg}>
          <img src={product.image} alt="" />
        </div>
        <div className={style.cardinfo}>
          <p className={style.texttitle}>{product.title}</p>
          <div className={style.cardfooter}>
            <span className={style.texttitle}>${product.price}</span>
            <button
              onClick={() => {
                setPageName("detailPage"), setProduct(product);
              }}
              className={style.cardbutton}
            >
              Read More
            </button>
          </div>
        </div>
        <LikeIcon prod={product} />
      </div>
    )
};

export default ProductItem;
