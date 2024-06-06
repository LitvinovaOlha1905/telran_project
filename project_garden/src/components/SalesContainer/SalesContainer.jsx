import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./SalesContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function SalesContainer() {
	const products = useSelector(state => state.products.products);

	const discountedProducts = products?.filter(product => product.discont_price);
	const shuffledProducts = discountedProducts
		?.map(product => {
			return {
				...product,
				title:
					product.title.length > 20
						? `${product.title.substring(0, 17)}...`
						: product.title,
			};
		})
		.sort(() => Math.random() - 0.5);

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.titleBlock}>
					<h2 className={styles.title}>Sale</h2>
					<div className={styles.titleLine}>
						<div className={styles.line}></div>
						<Link to='/sales/all'>
							<button className={styles.btn}>All sales</button>
						</Link>
					</div>
				</div>
				<div className={styles.cardBlock}>
					{shuffledProducts?.slice(0, 4).map(product => (
						<ProductCard key={product.id} {...product} />
					))}
				</div>
			</div>
		</div>
	);
}
