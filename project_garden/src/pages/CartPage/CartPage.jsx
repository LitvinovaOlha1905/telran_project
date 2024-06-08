import { useEffect, useState } from "react";
import classes from "./CartPage.module.css";
import { useSelector, useDispatch } from "react-redux";
import ProductInCart from "../../components/ProductInCart/ProductInCart";
import {
  addProduct,
  clearCart,
  countTotalSum,
  decreaseProduct,
  deleteProduct,
} from "../../store/slices/cartSlice";
import ProductAndCartTitle from "../../components/ProductAndCartTitle/ProductAndCartTitle";
import TitleH2 from "../../components/Cart/TitleH2/TitleH2";
import ProductModal from "../../components/ProductModal/ProductModal";
import whiteCross from "../../images/Icons/whiteCross.svg";
import CartForm from "../../components/CartForm/CartForm";
import { useContext } from "react";
import { Context } from "../../context";
import TitleBlockWithLine from '../../components/Cart/TitleBlockWithLine/TitleBlockWithLine'

const CartPage = () => {

    const { nightMode } = useContext(Context);

  // opened page is displayed at the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalActive, setModalActive] = useState(false);

  const { theme } = useSelector((state) => state.theme);
  const { productsInCart } = useSelector((store) => store.cart);
// console.log(productsInCart);
  const { totalSum } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // get dayDiscounted price
  let discountedPrice;
  if (productsInCart) {
    const isProductOfDay = productsInCart.find((product) => product.id === 14);
    discountedPrice = isProductOfDay ? isProductOfDay.price / 2 : null;
  }
  // console.log(discountedPrice);

  const handleAddToCart = (product) => {
    dispatch(addProduct(product));
    dispatch(countTotalSum());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(countTotalSum());
  };

  const handleDecreaseProduct = (product) => {
    dispatch(decreaseProduct(product));
    dispatch(countTotalSum());
  };
  const handleDeleteFromCart = (product) => {
    dispatch(deleteProduct(product));
    dispatch(countTotalSum());
  };
  // console.log(ProductInCart);

  const totalQuantity = productsInCart.reduce((total, product) => {
    return total + product.quantity;
  }, 0);
  // console.log(totalQuantity);

  return (
    <div className={theme === "dark" ? classes.dark : ""}>
      <ProductModal active={modalActive} setActive={setModalActive}>
        <div className={classes.modalWrapper}>
          <div className={classes.titleModalBlock}>
            <h3 className={classes.titleModal}>Congratulations!</h3>
            <img
              className={classes.whiteCross}
              src={whiteCross}
              alt="Close"
              onClick={() => setModalActive(false)}
            />
          </div>
          <p className={classes.descrModal}>
            Your order has been successfully placed on the website. <br />{" "}
            <br /> A manager will contact you shortly to confirm your order.
          </p>
        </div>
      </ProductModal>
      <div className="container">
        <div className={classes.wrapper}>
          <TitleBlockWithLine
            text="Shopping cart"
            textSmallBtn="Back to the store"
          />

          {productsInCart.length === 0 ? (
            <>
              <div className={classes.paragraphBlock}>
                <p
                  className={`${classes.paragraph} ${
                    theme === "dark" ? classes.textDark : ""
                  }`}
                >
                  Looks like you have no items in your basket currently.
                </p>
              </div>
            </>
          ) : (
            <div className={classes.prodAndOrdersBlock}>
              <div className={classes.productsBlock}>
                {productsInCart.map((product) => (
                  <ProductInCart
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    discont_price={product.discont_price}
                    quantity={product.quantity}
                    // {...product}
                    handleAddToCart={() => handleAddToCart(product)}
                    handleDeleteFromCart={() => handleDeleteFromCart(product)}
                    handleDecreaseProduct={() => handleDecreaseProduct(product)}
                  />
                ))}
              </div>
              <div
                className={`${classes.ordersBlock} ${
                  nightMode ? classes.night_mode : ""
                }`}
              >
                <ProductAndCartTitle text="Order details" />
                <h4 className={classes.greyTitle}>
                    {totalQuantity}
                    { "\u0020"}
                  items
                </h4>
                <div className={classes.totalBlock}>
                  <h4 className={classes.greyTitle}>Total</h4>

                  <TitleH2 text={`$${totalSum.toFixed()}`} />
                </div>
                {/* CartForm */}
                <CartForm cart={{ handleClearCart, setModalActive }} />
              </div>
            </div>
          )}
          <div className={classes.bottomSmallBtn}>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartPage;