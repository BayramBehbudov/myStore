import React, { useState } from "react";
import style from "../style/components/searchIcon.module.css";
import useChangeElement from "../changedElement.js";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

const productsData = (await getData()).products;

function searchIcon() {
  const [inputValue, setInputValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { setPageName, setProduct } = useChangeElement();

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    filterProducts(value);
    if (!showModal) setShowModal(true);
  };

  const filterProducts = (value) => {
    const filtered = productsData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (productId) => {
    setPageName("detailPage"),
      setProduct(productsData.filter((prod) => prod.id == productId)[0]);
  };

  const toggleModal = () => {
    setTimeout(() => {
      setShowModal(!showModal);
    }, 300);
  };

  return (
    <div className={style.searchIconContainer}>
      <input
        type="text"
        className={style.searchInput}
        placeholder="Search"
        value={inputValue}
        onChange={handleChange}
        onFocus={toggleModal}
        onBlur={toggleModal}
      />

      {showModal && (
        <div className={style.modal}>
          <ul>
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                {product.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default searchIcon;
