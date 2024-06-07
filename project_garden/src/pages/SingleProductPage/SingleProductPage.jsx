import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SingleProductPage.module.css";
import { Link, useParams } from "react-router-dom";
import { ReactComponent as IconPlus } from "../../images/Icons/plus.svg";
import { ReactComponent as IconMinus } from "../../images/Icons/minus.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { fetchSingleProducts } from "../../store/slices/singleProductSlice";
import {
	addProduct,
	countTotalSum,
	decreaseProduct,
} from "../../store/slices/cartSlice";
import { Context } from "../../context";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";

export default function SingleProductPage() {
	const { nightMode } = useContext(Context);
	const { setModalActive } = useContext(Context);

	const dispatch = useDispatch();
	const { productId } = useParams();
	const singleProductState = useSelector(store => store.singleProduct);

	useEffect(() => {
		dispatch(fetchSingleProducts(productId));
	}, [dispatch, productId]);

	const { status, product } = singleProductState;

	// Ensure product is defined and not empty before destructuring
	const productDetails = product && product.length > 0 ? product[0] : {};

	const { id, title, price, discont_price, description, image } =
		productDetails;

	const { favorites } = useSelector(store => store.favorites);
	const isProductInFavorite = favorites.some(
		favoriteProduct => favoriteProduct.id === id
	);
	const [heartActive, setHeartActive] = useState(isProductInFavorite);

	useEffect(() => {
		setHeartActive(isProductInFavorite);
	}, [isProductInFavorite]);

	const handleAddToFavorites = event => {
		event.preventDefault();
		if (isProductInFavorite) {
			dispatch(removeFavorite(productDetails));
		} else {
			dispatch(addFavorite(productDetails));
		}
	};

	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity(prevQuantity => prevQuantity + 1);
	};

	const handleDecrement = () => {
		setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
	};

	const handleAddToCart = () => {
		if (productDetails && Object.keys(productDetails).length > 0) {
			dispatch(addProduct({ ...productDetails, quantity }));
			dispatch(countTotalSum());
		}
	};

	return (
		<div className={styles.wrapper}>
			<div className='container'>
				{status === "loading" ? (
					<p>Loading...</p>
				) : (
					<div className={styles.singleProductCard}>
						<div className={styles.titleBlock}>
							<h2
								className={`${styles.title} ${
									nightMode ? styles.night_mode : ""
								}`}
							>
								{title}
							</h2>
							<Link onClick={handleAddToFavorites}>
								{heartActive ? (
									<IconHertActive className={styles.iconHeart} />
								) : (
									<IconHeart className={styles.iconHeart} />
								)}
							</Link>
						</div>

						<div
							className={styles.imgBlock}
							onClick={() => {
								setModalActive(true);
							}}
						>
							<img src={`http://localhost:3333${image}`} alt={title} />
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

						<div className={styles.infoBlock}>
							<div className={styles.priceBlock}>
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

								{discont_price && (
									<p
										className={`${styles.discountPosition} ${
											nightMode ? styles.night_mode : ""
										}` }
									>
										{"\u002d"}
										{(((price - discont_price) / price) * 100).toFixed()}%
									</p>
								)}
							</div>

							<div className={styles.countFlex}>
								<div className={styles.cartBlock}>
									<div className={styles.countBlock}>
										<Link onClick={handleDecrement}>
											<IconMinus className={styles.iconCount} />
										</Link>
										<p
											className={`${styles.count} ${
												nightMode ? styles.night_mode : ""
											}`}
										>
											{quantity}
										</p>{" "}
										<Link onClick={handleIncrement}>
											<IconPlus className={styles.iconCount} />
										</Link>
									</div>
								</div>

								<button onClick={handleAddToCart} className={styles.cartBtn}>
									Add to cart
								</button>
							</div>
						</div>

						<div
							className={`${styles.descriptionBlock} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							<h5
								className={`${styles.descriptionTitle} ${
									nightMode ? styles.night_mode : ""
								}`}
							>
								Description
							</h5>
							<p
								className={`${styles.description} ${
									nightMode ? styles.night_mode : ""
								}`}
							>
								{description}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
