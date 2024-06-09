import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './ProductInCart.module.css';
import close from '../../images/Icons/closeblack.svg';
import AddAndDeleteButtonsBlock from '../Cart/AddAndDeleteButtonsBlock/AddAndDeleteButtonsBlock';
import ProductAndCartTitle from '../ProductAndCartTitle/ProductAndCartTitle';
import TitleThrough from '../Cart/TitleThrough/TitleThrough';
import { useContext } from 'react';
import { Context } from '../../context';

const ProductInCart = ({
  id,
  image,
  title,
  price,
  discont_price,
  quantity,
  handleAddToCart,
  handleDeleteFromCart,
  handleDecreaseProduct,
}) => {

  const { nightMode } = useContext(Context);

  // get dayDiscounted price
  let discountedPrice = id === 14 ? price / 2 : null;

  return (
		<div
			className={`${classes.wrapper} ${nightMode ? classes.night_mode : ""}`}
		>
			<div
				className={classes.imgBlock}
				style={{
					backgroundImage: `url(https://project-backend-hvmn.onrender.com${image})`,
				}}
			></div>
			<div className={classes.aboutBlock}>
				<div className={classes.titleAndCloseBlock}>
					<div className={classes.titleBlock}>
						<GoodsCategoriesTitle text={title.substring(0, 30)} />
					</div>
					<img
						onClick={handleDeleteFromCart}
						src={close}
						alt='Close'
						className={classes.close}
					/>
				</div>
				<div className={classes.addAndPriceBlock}>
					<AddAndDeleteButtonsBlock
						quantity={quantity}
						handleAddToCart={handleAddToCart}
						handleDecreaseProduct={handleDecreaseProduct}
					/>
					<div className={classes.priceBlock}>
						<ProductAndCartTitle
							text={
								discountedPrice
									? `$${discountedPrice.toFixed()}`
									: discont_price
									? `$${discont_price.toFixed()}`
									: `$${price.toFixed()}`
							}
							weight
						/>
						{discont_price && (
							<TitleThrough text={`${"$" + price.toFixed()}`} smallText />
						)}
						{discountedPrice && (
							<TitleThrough text={`${"$" + price}`} smallText />
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProductInCart;
