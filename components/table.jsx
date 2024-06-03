import style from "../style/components/shopCardTable.module.css";
import UseChangedElement from "../changedElement.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/btnWithStars.jsx";

function Table() {
  const {
    shopCardItems,
    incrementCount,
    decrementCount,
    setProduct,
    setPageName,
    deleteProductInShopCard,
  } = UseChangedElement();
  function calculateTotal() {
    let sum = 0;
    shopCardItems.map((product) => {
      const { price, count, discountPercentage } = product;

      sum +=
        (discountPercentage
          ? parseFloat(price - (price * discountPercentage) / 100).toFixed(2)
          : price) * count;
    });
    return parseFloat(sum).toFixed(2);
  }

  return shopCardItems.length != 0 ? (
    <table className={style.shopCardTable} border="1">
      <thead>
        <tr>
          <th colSpan={"3"}>Product</th>
          <th>Price</th>
          <th>Count</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {shopCardItems.map((product, index) => {
          const { image, price, title, count, discountPercentage } = product;

          const newPrice = discountPercentage
            ? parseFloat(price - (price * discountPercentage) / 100).toFixed(2)
            : null;

          return (
            <tr key={index}>
              <th onClick={() => deleteProductInShopCard(index)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={style.deleteProduct}
                />
              </th>
              <th>
                <img src={image} alt="" />
              </th>
              <th
                onClick={() => {
                  setPageName("detailPage"), setProduct(product);
                }}
                className={style.prodTitle}
              >
                {title}
              </th>
              <th>
                {discountPercentage != undefined ? (
                  <div>
                    <s>${price}</s>
                    <p>{newPrice}</p>
                  </div>
                ) : (
                  price
                )}
              </th>
              <th>
                <div className={style.counter}>
                  <button onClick={() => decrementCount(index)}>-</button>

                  <p>{count}</p>

                  <button
                    onClick={() => {
                      incrementCount(index);
                    }}
                  >
                    +
                  </button>
                </div>
              </th>
              <th>
                $
                {parseFloat(
                  count * (discountPercentage ? newPrice : price)
                ).toFixed(2)}
              </th>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">Total:</td>
          <td>{calculateTotal()}</td>
        </tr>
      </tfoot>
    </table>
  ) : (
    <div className={style.emptyTextContainer}>
      <h1>Your Card Empty</h1>
      <Button />
    </div>
  );
}

export default Table;
