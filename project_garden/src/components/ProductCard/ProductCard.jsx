import React from "react"
import styles from "./ProductCard.module.css"

export default function ProductCard({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const croppedTitle =
		title.length > 20 ? title.substring(0, 17) + "..." : title

	return (
		<div className={styles.cardBlock}>
			<img src={`http://localhost:3333${image}`} alt={title} />

			<div className={styles.descriptionBlock}>
				<p>{croppedTitle}</p>
				<div className={styles.priceBlock}>
					<p>
						{"\u0024"}
						{price}
					</p>
					{discont_price ? (
						<span>
							{"\u0024"}
							{discont_price}
						</span>
					) : null}
				</div>
			</div>
		</div>
	)
}
