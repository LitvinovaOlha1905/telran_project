import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as IconBag } from "../../images/Icons/bag.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { ReactComponent as IconBagActive } from "../../images/Icons/bagActive.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, countTotalSum,  } from "../../store/slices/cartSlice";

export default function ProductCard({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const [heartActive, setHeartActive] = useState(false);
	const [bagActive, setBagActive] = useState(false);

	const { productsInCart } = useSelector((store) => store.cart);

	const dispatch = useDispatch();
	const product ={ id:id, title:title, image:image, price:price, discont_price:discont_price};
	const handleAddToCart = (event) => {
		// event.preventDefault();
		console.log(product);
	  dispatch(addProduct(product));
	  dispatch(countTotalSum());
	  console.log(productsInCart);
	};

	return (
		<div>
			<div className={styles.cardBlock}>
				<Link to={`/product/${id}`}>
					<img src={`http://localhost:3333${image}`} alt={title} />

					{/* Description Block */}
					<div className={styles.descriptionBlock}>
						<p className={styles.description}>{title.length > 20 ? `${title.substring(0, 17)}...` : title}</p>
						<div className={styles.priceBlock}>
							<p className={styles.price}>
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

					{/* Icons Block */}
					<div className={styles.cartBlock}>
						<Link onClick={() => setHeartActive(!heartActive)}>
							{heartActive ? (
								<IconHertActive className={styles.iconHeart} size='48' />
							) : (
								<IconHeart
									className={[styles.icon, styles.iconHeart].join(" ")}
									size='48'
								/>
							)}
						</Link>
						<Link onClick={(event) => {event.preventDefault(); setBagActive(!bagActive); handleAddToCart()}}>

							{bagActive ? (
								<IconBagActive className={styles.icon} size='48' />
							) : (
								<IconBag className={styles.icon} size='48' />
							)}
						</Link>
					</div>

						{/* Sale Block */}
						{discont_price && (
							<p className={styles.discount}>
								{(((price - discont_price) / price) * 100).toFixed()}%
							</p>
						)}
					</div>
				</Link>
			</div>
		</div>
	);
}
