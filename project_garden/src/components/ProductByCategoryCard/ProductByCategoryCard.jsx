import React from 'react'
import styles from './ProductByCategoryCard.module.css'

export default function ProductByCategoryCard({ id, image, title, price, discont_price }) {
    return (
      <div className={styles.cardBlock}>
        <img src={`http://localhost:3333${image}`} alt={title} />

        <div className={styles.descriptionBlock}>
          <p>{title}</p>
          <div className={styles.priceBlock}>
            <p>
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
        </div>
      </div>
    );
}
