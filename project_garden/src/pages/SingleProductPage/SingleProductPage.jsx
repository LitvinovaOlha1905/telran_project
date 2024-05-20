import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SingleProductPage.module.css";
import { Link, useParams } from "react-router-dom";
import { fetchSingleProducts } from "../../store/slices/singleProductSlice";
import { ReactComponent as IconPlus } from '../../images/Icons/plus.svg';
import { ReactComponent as IconMinus } from "../../images/Icons/minus.svg";
import { ReactComponent as Heart } from "../../images/Icons/heart.svg";

export default function SingleProductPage() {
  const dispatch = useDispatch();

  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchSingleProducts(productId));
  }, []);

  const singleProductState = useSelector((store) => store.singleProduct);

  const { status, product } = singleProductState;

  const [{id, title, price, discont_price, description, image }] = product;

  console.log(singleProductState);
  console.log(product);
  console.log(title);


  return (
    <div className="container">
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.singleProductCard}>
          <div className={styles.imgBlock}>
            <img src={`http://localhost:3333${image}`} alt={title} />
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.titleBlock}>
              <h2>{title}</h2>
              <Heart className={styles.icon} />
            </div>

            <div className={styles.priceBlock}>
              <div className={styles.prices}>
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

              <div>
                {discont_price && (
                  <p className={styles.discount}>
                    {"\u002d"}
                    {(((price - discont_price) / price) * 100).toFixed()}%
                  </p>
                )}
              </div>
            </div>

            <div className={styles.cartBlock}>
              <div className={styles.countBlock}>
                <Link>
                  <IconMinus />
                </Link>
                <p></p>
                <Link>
                  <IconPlus />
                </Link>
              </div>

              <button className={styles.cartBtn}>Add to cart</button>
            </div>

            <div className={styles.descriptionBlock}>
              <h5>Description</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
