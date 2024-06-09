import React, { useState, useEffect, useContext } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconBag } from "../../images/Icons/bag.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { ReactComponent as IconBagActive } from "../../images/Icons/bagActive.svg";
import { useDispatch, useSelector } from "react-redux";
import {
	addProduct,
	deleteProduct,
	countTotalSum,
} from "../../store/slices/cartSlice";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";
import { Context } from "../../context";

export default function ProductCard({
	id,
	image,
	title,
	price,
	discont_price,
	descriptionClassName,
}) {
	const { nightMode } = useContext(Context);

	const dispatch = useDispatch();
	const product = { id, title, image, price, discont_price };

	const { productsInCart } = useSelector(store => store.cart);
	const { favorites } = useSelector(store => store.favorites);

	const isProductInCart = productsInCart.some(
		cartProduct => cartProduct.id === id
	);
	const isProductInFavorite = favorites.some(
		favoriteProduct => favoriteProduct.id === id
	);

	const [heartActive, setHeartActive] = useState(isProductInFavorite);
	const [bagActive, setBagActive] = useState(isProductInCart);

	useEffect(() => {
		setHeartActive(isProductInFavorite);
	}, [isProductInFavorite]);

	useEffect(() => {
		setBagActive(isProductInCart);
	}, [isProductInCart]);

	const handleAddToCart = event => {
		event.preventDefault();
		if (isProductInCart) {
			dispatch(deleteProduct(product));
		} else {
			dispatch(addProduct(product));
		}
		dispatch(countTotalSum());
	};

	const handleAddToFavorites = event => {
		event.preventDefault();
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
				{/* Description Block */}
				<div
					className={`${styles.descriptionBlock} ${
						nightMode ? styles.night_mode : ""
					}`}
				>
					<p
						className={`${styles.description} ${descriptionClassName} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						{title}
					</p>
					<div
						className={`${styles.priceBlock} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						<p
							className={`${styles.price} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							{"\u0024"}
							{discont_price === null
								? price.toFixed()
								: discont_price.toFixed()}
						</p>
						{discont_price ? (
							<span>
								{"\u0024"}
								{price.toFixed()}
							</span>
						) : null}
					</div>
					{/* Icons Block */}
					<div className={styles.cartBlock}>
						<div onClick={handleAddToFavorites}>
							{heartActive ? (
								<IconHertActive className={styles.iconHeart} />
							) : (
								<IconHeart
									className={[styles.icon, styles.iconHeart].join(" ")}
								/>
							)}
						</div>
						<div onClick={handleAddToCart}>
							{bagActive ? (
								<IconBagActive className={styles.icon} />
							) : (
								<IconBag className={styles.icon} />
							)}
						</div>
					</div>
					{/* Sale Block */}
					{discont_price && (
						<p
							className={`${styles.discount} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							{"\u002d"}
							{(((price - discont_price) / price) * 100).toFixed()}%
						</p>
					)}
				</div>
			</Link>
		</div>
	);
}
