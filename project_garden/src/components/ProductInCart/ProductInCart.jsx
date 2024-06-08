import GoodsCategoriesTitle from '../GoodsCategoriesTitle/GoodsCategoriesTitle';
import classes from './ProductInCart.module.css';
import close from '../../images/Icons/closeblack.svg';
import { useSelector } from 'react-redux';
import AddAndDeleteButtonsBlock from '../AddAndDeleteButtonsBlock/AddAndDeleteButtonsBlock';
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

  const { theme } = useSelector((state) => state.theme);

  // get dayDiscounted price
  let discountedPrice = id === 14 ? price / 2 : null;

  return (
    <div
      className={`${classes.wrapper} ${nightMode ? classes.night_mode : ""}`}
    >
      <div
        className={classes.imgBlock}
        style={{ backgroundImage: `url(http://localhost:3333${image})` }}
      ></div>
      <div className={classes.aboutBlock}>
        <div className={classes.titleAndCloseBlock}>
          <div className={classes.titleBlock}>
            <GoodsCategoriesTitle text={title.substring(0, 30)} />
          </div>
          <img
            onClick={handleDeleteFromCart}
            src={close}
            alt="Close"
            className={`${classes.close} ${
              theme === "dark" ? classes.menuDark : ""
            }`}
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
                  ? `$${discountedPrice}`
                  : discont_price
                  ? `$${discont_price}`
                  : `$${price}`
              }
              weight
            />
            {discont_price && (
              <TitleThrough text={`${"$" + price}`} smallText />
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
