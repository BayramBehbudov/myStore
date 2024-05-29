import style from "../style/components/products.module.css";
import setSelectedItem from "../changedElement.js";

const ProductItem = ({ product }) => {
  const { selectedCategory, setPageName, setProduct } = setSelectedItem();

  if (selectedCategory == "All") {
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
      </div>
    );
  } else if (selectedCategory == product.category) {
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
              className={style.cardbutton}
              onClick={() => {
                setPageName("detailPage"), setProduct(product);
              }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductItem;
