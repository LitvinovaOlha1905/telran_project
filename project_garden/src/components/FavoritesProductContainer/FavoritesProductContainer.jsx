import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./FavoritesProductContainer.module.css";
import FormSortPrice from "../FormSort/FormSortPrice/FormSortPrice";
import FormSelect from "../FormSort/FormSelect/FormSelect";
import { filterFavorits, selectFavorits } from "../../store/slices/favoritesSlice";

export default function FavoritesProductContainer() {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorits) || [];

	const truncateTitle = title => {
		return title.length > 20 ? `${title.substring(0, 17)}...` : title;
	};
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
							title={truncateTitle(product.title)}
						/>
					))
				) : (
					<p className={styles.description}>No favorite products found.</p>
				)}
			</div>
		</div>
	);
}
