import ProductCard from "./productCard.jsx";
import style from "../style/components/products.module.css";

const getData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data;
};

const productsData = (await getData()).products;

function products() {
  
  return (
    <div className={style.productsContainer}>
      {productsData.map((item) => (
        <ProductCard  key={item.sku} product={item} />
      ))}
    </div>
  );
}

export default products;
