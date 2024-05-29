import ProductCard from "./productCard.jsx";
import style from "../style/components/products.module.css";
import { AllProductsData } from "../allProducts.jsx";

function products() {
  return (
    <div className={style.productsContainer}>
      {AllProductsData.map((item) => (
        <ProductCard key={item.sku} product={item} />
      ))}
    </div>
  );
}
export default products;
