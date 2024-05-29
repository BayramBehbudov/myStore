import style from "../style/components/shopCardTable.module.css";
import ShopCardData from "../changedElement.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function table() {
  const { shopCardItems } = ShopCardData();
  function calculateTotal() {
    let sum = 0;
    shopCardItems.map((product) => {
      sum += product.price * product.count;
    });
    return sum;
  }

  return (
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
          const { images, price, title, count } = product;
          return (
            <tr key={index}>
              <th onClick={() => shopCardItems.splice(index, 1)}>
                <FontAwesomeIcon
                  icon={faXmark}
                  className={style.deleteProduct}
                />
              </th>
              <th>
                <img src={images[0]} alt="" />
              </th>
              <th>{title}</th>
              <th>${price}</th>
              <th>
                <div className={style.counter}>
                  <button
                    onClick={() =>
                      count > 1 ? (shopCardItems[index].count -= 1) : 1
                    }
                  >
                    -
                  </button>

                  <p>{count}</p>

                  <button
                    onClick={() => {
                      shopCardItems[index].count += 1;
                    }}
                  >
                    +
                  </button>
                </div>
              </th>
              <th className="totals">${count * price}</th>
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
  );
}

export default table;
