import React, { useContext, useEffect } from "react";
import styles from "./FormSortPrice.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../../../store/slices/productsSlice";
import { filterFavorits } from "../../../store/slices/favoritesSlice";
import { filterProductsData } from "../../../store/slices/dataSlice";
import { Context } from "../../../context";

export default function FormSortPrice() {
	const { nightMode } = useContext(Context);
	const dispatch = useDispatch();

	const filter = e => {
		e.preventDefault();

		const { min_price, max_price } = e.target;

		const min_max_values = {
			min_price: min_price.value || 0,
			max_price: max_price.value || Infinity,
		};

		dispatch(filterProducts(min_max_values));

		dispatch(filterProductsData(min_max_values));

		dispatch(filterFavorits(min_max_values));

		e.target.reset();
	};

	return (
		<form className={styles.formSortBlock} onSubmit={filter}>
			<label
				className={`${styles.sortLabel} ${nightMode ? styles.night_mode : ""}`}
			>
				Price
			</label>
			<input
				className={[styles.input, styles.sortPriceInput].join(" ")}
				type='number'
				pattern='[0-9]*'
				placeholder='from'
				name='min_price'
			/>
			<input
				className={[styles.input, styles.sortPriceInput].join(" ")}
				type='number'
				pattern='[0-9]*'
				placeholder='to'
				name='max_price'
			/>
			<button type='submit' className={styles.sortButton}>
				Filter
			</button>
		</form>
	);
}
