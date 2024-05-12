import React, { useEffect } from "react"
import Sceleton from '../../components/Sceleton/Skeleton'
import SalesContainer from '../../components/SalesContainer/SalesContainer'
import styles from './AllSalesPage.module.css'
import ProductCard from "../../components/ProductCard/ProductCard"

export default function AllSalesPage() {
useEffect(() => {
	window.scrollTo(0, 0)
}, [])
const [isLoading, setIsLoading] = React.useState(true)

React.useEffect(() => {
	setIsLoading(true)

	setTimeout(() => {
		setIsLoading(false)
	}, 2000)
}, [])

  return (
		<div className={styles.wrapper}>
			<div className='container'>
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
							id='sortSelect'
							value={sortType}
							onChange={handleSortChange}
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

				{isLoading ? <Sceleton /> : <SalesContainer />}
			</div>
		</div>
	)
}
