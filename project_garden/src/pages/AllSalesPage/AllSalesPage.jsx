import React, { useEffect } from "react";
import Sceleton from "../../components/Sceleton/Skeleton";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./AllSalesPage.module.css";
import { useSelector } from "react-redux";
import FormSortPrice from "../../components/FormSort/FormSortPrice/FormSortPrice";
import FormSelect from "../../components/FormSort/FormSelect/FormSelect";
import { useContext } from "react";
import { Context } from "../../context";

export default function AllSalesPage() {

	const { nightMode } = useContext(Context);

	const { products } = useSelector(state => state.products);
	const discountedProducts = products?.filter(product => product.discont_price);

	// console.log(discountedProducts);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		setIsLoading(true);

		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>
          Discounted items
        </h1>

        {isLoading ? (
          <Sceleton />
        ) : (
          <div>
            <div className={styles.sortBlock}>
              <FormSortPrice />
              <FormSelect />
            </div>

            <div className={styles.productsBlock}>
              {discountedProducts.map(
                (el) => el.visible && <ProductCard key={el.id} {...el} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
