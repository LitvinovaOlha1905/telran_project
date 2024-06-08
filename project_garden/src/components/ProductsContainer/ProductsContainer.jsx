import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsContainer.module.css";
import FormSelect from "./../FormSort/FormSelect/FormSelect";
import FormDiscountItems from "./../FormSort/FormDiscountItems/FormDiscountItems";
import FormSortPrice from "./../FormSort/FormSortPrice/FormSortPrice";
import { selectProducts } from "../../store/slices/productsSlice";

export default function ProductsContainer() {
	const products = useSelector(selectProducts);
	// console.log(products);

	return (
		<div>
			<div className={styles.sortBlock}>
				{/* Price */}
				<FormSortPrice />

				{/* DiscountItems */}
				<FormDiscountItems />

				{/* Select */}
				<FormSelect />
			</div>

			{/* Cards */}
			<div className={styles.productsBlock}>
				{products.map(el => el.visible && <ProductCard key={el.id} {...el} />)}
			</div>
		</div>
	);
}
