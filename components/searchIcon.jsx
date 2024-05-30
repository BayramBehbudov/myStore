import React, { useState } from "react";
import style from "../style/components/searchIcon.module.css";
import useChangeElement from "../changedElement.js";
import { AllProductsData } from "../allProducts.jsx";

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
    const filtered = AllProductsData.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleProductClick = (sku) => {

    setProduct(AllProductsData.filter((prod) => prod.sku == sku)[0])
    setInputValue("")
    setFilteredProducts([])
    setPageName("detailPage")
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
                key={product.sku}
                onClick={() => handleProductClick(product.sku)}
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
