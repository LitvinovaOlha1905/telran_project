import React from 'react';
import DiscountForm from '../DiscountForm/DiscountForm';
import image from '../../images/DiscountForm/image_form.png';
import styles from './GetDiscount.module.css'; 

const GetDiscount = () => {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.containerForm}>
          <h2 className={styles.title}>5% off on the first order</h2>

          <article className={styles.container_form}>
            <DiscountForm />
            <img className={styles.image} src={image} alt="Image" />
          </article>
        </div>
      </div>
    </section>
  );
};

export default GetDiscount;
