import React, { useContext, useState } from "react";
import styles from "./ModalDayProduct.module.css";
import { ReactComponent as Cross } from "../../images/Icons/close.svg";
import { Context } from "../../context";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function ModalDayProduct() {

  const [heartActive, setHeartActive] = useState(false);

  const { modalDayActive, setModalDayActive } = useContext(Context);

  const { products } = useSelector((state) => state.products);

  // Получаем индекс продукта на основе текущего дня
  const currentDate = new Date().getDate();
  const productIndex = currentDate % products.length;
  const productOfTheDay = products[productIndex];

  console.log(productOfTheDay);
  console.log(products);
  
  const { title, image, price, discont_price } = productOfTheDay;

  return (
    <div
      className={[styles.modal, modalDayActive ? styles.active : ""].join(" ")}
      onClick={() => {
        setModalDayActive(false);
      }}
    >
      <div
        className={styles.modal_content}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.title}>
          <h5>50% discount on product of the day!</h5>
          <Cross
            className={styles.cross}
            onClick={() => {
              setModalDayActive(false);
            }}
          />
        </div>

        <div className={styles.product_card}>
          {products && (
            <div className={styles.cardBlock}>
              <img src={`http://localhost:3333${image}`} alt={title} />

              {/* Description Block */}
              <div className={styles.descriptionBlock}>
                <p className={styles.description}>
                  {title.length > 20 ? `${title.substring(0, 17)}...` : title}
                </p>
                <div className={styles.priceBlock}>
                  <p className={styles.price}>
                    {"\u0024"}
                    {(price / 2).toFixed(2)}
                  </p>
                  {discont_price ? (
                    <span>
                      {"\u0024"}
                      {price}
                    </span>
                  ) : null}
                </div>

                {/* Icons Block */}
                <div className={styles.cartBlock}>
                  <Link onClick={() => setHeartActive(!heartActive)}>
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

                {/* Sale Block */}
                {discont_price && (
                  <p className={styles.discount}>
                    50%
                  </p>
                )}
              </div>
            </div>
          )}

          <button className={styles.btn}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
