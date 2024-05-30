import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import styles from './FavoritesProductContainer.module.css'

export default function FavoritesProductContainer() {
	const favorites = useSelector(store => store.favorites.favorites);

	return (
		<div className='container'>
			<div className={styles.cardBlock}>
				{favorites.length > 0 ? (
					favorites.map(product => (
						<ProductCard key={product.id} {...product} />
					))
				) : (
					<p>No favorite products found.</p>
				)}
			</div>
		</div>
	);
}
