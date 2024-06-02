import { AllProductsData } from "../allProducts";
import ProductsCard from "../components/productCard";
import style from "../style/pages/discountPage.module.css";

function DiscountPage() {
  return (
    <div className={style.discountContainer}>
      <h1>Grab Your Discounts Now! Save Big on Your Favorite Items!</h1>
      <div className={style.discountProducts}>
        {AllProductsData.map(
          (prod) =>
            prod.discountPercentage && (
              <ProductsCard key={prod.sku} product={prod} />
            )
        )}
      </div>
    </div>
  );
}

export default DiscountPage;
