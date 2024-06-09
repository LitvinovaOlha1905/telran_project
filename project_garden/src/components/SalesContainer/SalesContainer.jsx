import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./SalesContainer.module.css";
import ProductCard from "../ProductCard/ProductCard";
import { Context } from "../../context";

export default function SalesContainer() {
	const { nightMode } = useContext(Context);

	const products = useSelector(state => state.products.products);

	const discountedProducts = products?.filter(product => product.discont_price);
	const shuffledProducts = discountedProducts
		?.map(product => {
			return {
				...product,
			};
		})
		.sort(() => Math.random() - 0.5);

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.titleBlock}>
					<h2
						className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}
					>
						Sale
					</h2>

					<div className={styles.titleLine}>
						<div className={styles.line}></div>
						<Link to='/sales/all'>
							<button className={`${styles.btn} ${styles.btnPhone}`}>
								All sales
							</button>
						</Link>
					</div>
				</div>
				<div className={styles.cardBlock}>
					{shuffledProducts?.slice(0, 4).map(product => (
						<ProductCard
							key={product.id}
							{...product}
							descriptionClassName={styles.description}
						/>
					))}
				</div>

				<Link to='/sales/all'>
					<button className={styles.btnPhone}>All sales</button>
				</Link>
			</div>
		</div>
	);
}
