import React, { useState } from "react"
import { useSelector } from "react-redux"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./ProductsContainer.module.css"

export default function ProductsContainer() {
	const { products, status } = useSelector(state => state.products)

	console.log(products)

	if (status === "loading") {
		return <h1>Loading...</h1>
	}

	return (
		<div>
			{/* Price */}
			<div className={styles.sortBlock}>
				<form className={styles.formSortBlock}>
					<label className={styles.sortLabel}>Price</label>
					<input
						className={[styles.input, styles.sortPriceInput].join(" ")}
						type='number'
						pattern='[0-9]*'
						placeholder='from'
					/>
					<input
						className={[styles.input, styles.sortPriceInput].join(" ")}
						type='number'
						pattern='[0-9]*'
						placeholder='to'
					/>
				</form>

				{/* Discounted items */}
				<form className={styles.formSortBlock}>
					<label className={styles.sortLabel}>Discounted items</label>
					<input
						className={[styles.input, styles.sortDiscountInput].join(" ")}
						type='checkbox'
					/>
				</form>

				{/* Select - уточнить у Нелли как стилизрвать option */}
				<form className={styles.formSortBlock}>
					<label className={styles.sortLabel} htmlFor='sortSelect'>
						Sorted
					</label>
					<select
						className={styles.sortSelect}
					>
						<option value='default'>by default</option>
						<option value='priceAsc'>low to High</option>
						<option value='priceDesc'>high to Low</option>
						<option value='discounted'>discounted items</option>
					</select>
				</form>
			</div>

			{/* Cards */}
			<div className={styles.productsBlock}>
				{products.map(el => (
					<ProductCard key={el.id} {...el} />
				))}
			</div>
		</div>
	)
}
