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

  const discountedProducts = products?.filter(
    (product) => product.discont_price
  );
  console.log(discountedProducts);

  const getProductOfTheDay = (discountedProducts) => {
    const currentDate = new Date().getDate();
    // Выбираем один товар на основе текущей даты
    const productIndex = currentDate % products.length;
    return discountedProducts[productIndex];
  };

  return (
    <div
      className={[styles.modal, modalDayActive ? styles.active : ""].join(" ")}
    >
      <div className={styles.modal_content}>
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
          <div></div>

          <button className={styles.btn}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
