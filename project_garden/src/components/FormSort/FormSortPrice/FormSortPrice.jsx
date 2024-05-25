import React from "react";
import styles from "./FormSortPrice.module.css";
import { useDispatch } from "react-redux";
import {filterProducts} from '../../../store/slices/productsSlice'

export default function FormSortPrice() {
	const dispatch = useDispatch();

	const filter = e => {
		e.preventDefault();

		const { min_price, max_price } = e.target;

		const min_max_values = {
			min_price: min_price.value || 0,
			max_price: max_price.value || Infinity,
		};

		dispatch(filterProducts(min_max_values));

		e.target.reset();
	};
	return (
		<form className={styles.formSortBlock} onSubmit={filter}>
			{/* <form className={styles.formSortBlock} onSubmit={filter}> */}
			<label className={styles.sortLabel}>Price</label>
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
