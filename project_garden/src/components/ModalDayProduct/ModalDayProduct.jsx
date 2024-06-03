import React, { useContext, useEffect, useState } from "react";
import styles from "./ModalDayProduct.module.css";
import { ReactComponent as Cross } from "../../images/Icons/close.svg";
import { Context } from "../../context";
import { ReactComponent as IconBag } from "../../images/Icons/bag.svg";
import { ReactComponent as IconBagActive } from "../../images/Icons/bagActive.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/slices/favoritesSlice";

export default function ModalDayProduct() {
  const dispatch = useDispatch();

  const { modalDayActive, setModalDayActive } = useContext(Context);
  const { products } = useSelector((state) => state.products);
  const { favorites } = useSelector((store) => store.favorites);

  // Получаем индекс продукта на основе текущего дня
  const currentDate = new Date().getDate();
  const productIndex = currentDate % products.length;
  const productOfTheDay = products[productIndex];

  const {
    id,
    title = "Fallback product name",
    image,
    price = 1,
  } = productOfTheDay || {};

  const isProductInFavorite = favorites.some(
    (favoriteProduct) => favoriteProduct.id === id
  );

  const [heartActive, setHeartActive] = useState(isProductInFavorite);

  useEffect(() => {
    setHeartActive(isProductInFavorite);
  }, [isProductInFavorite]);

  const handleAddToFavorites = (event) => {
    event.preventDefault();
    if (isProductInFavorite) {
      dispatch(removeFavorite(productOfTheDay));
    } else {
      dispatch(addFavorite(productOfTheDay));
    }
  };

  return (
    <div
      className={[styles.modal, modalDayActive ? styles.active : ""].join(" ")}
      onClick={() => setModalDayActive(false)}
    >
      <div
        className={styles.modal_content}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.title}>
          <h5>50% discount on product of the day!</h5>
          <Cross
            className={styles.cross}
            onClick={() => setModalDayActive(false)}
          />
        </div>

        <div className={styles.product_card}>
          <div className={styles.cardBlock}>
            <img src={`http://localhost:3333${image}`} alt={title} />

            <div className={styles.descriptionBlock}>
              <p className={styles.description}>
                {title.length > 20 ? `${title.substring(0, 17)}...` : title}
              </p>
              <div className={styles.priceBlock}>
                <p className={styles.price}>
                  {"\u0024"}
                  {(price / 2).toFixed(2)}
                </p>
                <span>
                  {"\u0024"}
                  {price}
                </span>
              </div>

              <div className={styles.cartBlock}>
                <Link onClick={handleAddToFavorites}>
                    {heartActive ? (
                    <IconHertActive className={styles.iconHeart} size="48" />
                  ) : (
                    <IconHeart
                      className={[styles.icon, styles.iconHeart].join(" ")}
                      size="48"
                    />
                  )}
                </Link>
              </div>

              <p className={styles.discount}>50%</p>
            </div>
          </div>

          <button className={styles.btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

