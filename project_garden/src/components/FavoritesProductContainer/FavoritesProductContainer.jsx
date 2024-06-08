import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./FavoritesProductContainer.module.css";
import FormSortPrice from "../FormSort/FormSortPrice/FormSortPrice";
import FormSelect from "../FormSort/FormSelect/FormSelect";
import { selectFavorits } from "../../store/slices/favoritesSlice";

export default function FavoritesProductContainer() {
	const favorites = useSelector(selectFavorits) || [];
	// console.log(favorites);

	return (
		<div>
			<div className={styles.sortBlock}>
				<FormSortPrice />
				<FormSelect />
			</div>
			<div className={styles.cardBlock}>
				{favorites.length > 0 ? (
					favorites.map(product => (
						<ProductCard
							key={product.id}
							{...product}
							descriptionClassName={styles.description}
						/>
					))
				) : (
					<p className={styles.description}>No favorite products found.</p>
				)}
			</div>
		</div>
	);
}
