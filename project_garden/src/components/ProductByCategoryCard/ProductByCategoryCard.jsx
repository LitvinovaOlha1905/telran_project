import React, { useContext, useState } from "react";
import styles from "./ProductByCategoryCard.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconBag } from "../../images/Icons/bag.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { ReactComponent as IconBagActive } from "../../images/Icons/bagActive.svg";
import { addProduct, countTotalSum } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Context } from "../../context";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";

export default function ProductByCategoryCard({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const [heartActive, setHeartActive] = useState(false);
	const [bagActive, setBagActive] = useState(false);

	// const { productsInCart } = useSelector(store => store.cart);
	const { favorites } = useSelector(store => store.favorites);
	const isProductInFavorite = favorites.some(
		favoriteProduct => favoriteProduct.id === id
	);

	const { nightMode } = useContext(Context);

	const dispatch = useDispatch();
	const product = {
		id: id,
		title: title,
		image: image,
		price: price,
		discont_price: discont_price,
	};
	const handleAddToCart = event => {
		// event.preventDefault();
		// console.log(product);
		dispatch(addProduct(product));
		dispatch(countTotalSum());
		// console.log(productsInCart);
	};

	const handleAddToFavorites = event => {
		// event.preventDefault();
		if (isProductInFavorite) {
			dispatch(removeFavorite(product));
		} else {
			dispatch(addFavorite(product));
		}
	};

	return (
		<div className={styles.cardBlock}>
			<Link to={`/product/${id}`}>
				<img
					src={`https://project-backend-hvmn.onrender.com${image}`}
					alt={title}
				/>

				<div
					className={`${styles.descriptionBlock} ${
						nightMode ? styles.night_mode : ""
					}`}
				>
					<p
						className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}
					>
						{title}
					</p>
					<div className={styles.priceBlock}>
						<p
							className={`${styles.price} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							{"\u0024"}
							{discont_price === null
								? price?.toFixed()
								: discont_price?.toFixed()}
						</p>
						{discont_price ? (
							<span>
								{"\u0024"}
								{price?.toFixed()}
							</span>
						) : null}
					</div>
				</div>

				{/* Icons Block */}
				<div className={styles.cartBlock}>
					<div
						onClick={event => {
							event.preventDefault();
							setHeartActive(!heartActive);
							handleAddToFavorites();
						}}
					>
						{heartActive ? (
							<IconHertActive className={styles.iconHeart} size='48' />
						) : (
							<IconHeart
								className={[styles.icon, styles.iconHeart].join(" ")}
								size='48'
							/>
						)}
					</div>
					<div
						onClick={event => {
							event.preventDefault();
							setBagActive(!bagActive);
							handleAddToCart();
						}}
					>
						{bagActive ? (
							<IconBagActive className={styles.icon} size='48' />
						) : (
							<IconBag className={styles.icon} size='48' />
						)}
					</div>
				</div>

				{/* Sale Block */}
				{discont_price && (
					<p className={styles.discount}>
						{(((price - discont_price) / price) * 100)?.toFixed()}%
					</p>
				)}
			</Link>
		</div>
	);
}
