import ProductCard from "./productCard.jsx";
import style from "../style/components/products.module.css";
import { AllProductsData } from "../allProducts.jsx";
import setSelectedItem from "../changedElement.js";

function Products() {
  const { selectedCategory } = setSelectedItem();

  if (selectedCategory == "All") {
    return (
      <div className={style.productsContainer}>
        {AllProductsData.map((item) => (
          <ProductCard key={item.sku} product={item} />
        ))}
      </div>
    );
  } else {
    return (
      <div className={style.productsContainer}>
        {AllProductsData.map(
          (item) =>
            item.category === selectedCategory && (
              <ProductCard key={item.sku} product={item} />
            )
        )}
      </div>
    );
  }
  
}
export default Products;
