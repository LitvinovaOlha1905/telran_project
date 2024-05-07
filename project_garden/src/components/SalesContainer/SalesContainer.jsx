import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"
import styles from "./SalesContainer.module.css"

export default function SalesContainer() {
	const products = useSelector(state => state.products.products)

	const discountedProducts = products?.filter(product => product.discont_price)
	const shuffledProducts = discountedProducts?.sort(() => Math.random() - 0.5)

	return (
		<div className='container'>
			<div>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>Sale</h2>
					<div>
						<hr className={styles.line} />
						<Link>
							<button className={styles.btn}>All sales</button>
						</Link>
					</div>
				</div>
				<div className={styles.cardBlock}>
					{shuffledProducts?.slice(0, 4).map(product => (
						<Link key={product.id} to='/sales/all' className={styles.card}>
							<ProductCard {...product} productNameClass={styles.productName} />
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
