import React, { useContext } from 'react'
import styles from './CategoriesCard.module.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context';

export default function CategoriesCard({ id, image, title, className }) {
	const { nightMode } = useContext(Context);

	return (
		<div className={`${styles.categoryCard} ${className}`}>
			<Link to={`/category/${id}`}>
				<img
					className={styles.image}
					src={`http://localhost:3333${image}`}
					alt={title}
				/>
				<p className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>
					{title}
				</p>
			</Link>
		</div>
	);
}
