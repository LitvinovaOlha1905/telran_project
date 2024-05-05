import React from "react"
import styles from "./ProductCard.module.css"

export default function ProductCard({ product }) {
	return (
		<div className={styles.cardBlock}>
			<img src={product.image} alt={product.title} />

			<div className={styles.descriptionBlock}>
				<p>{product.title}</p>
				<div className={styles.priceBlock}>
					<p>
						{"\u0024"}
						{product.price}
					</p>
					{product.discont_price ? (
						<span>
							{"\u0024"}
							{product.discont_price}
						</span>
					) : null}
				</div>
			</div>
		</div>
	)
}
