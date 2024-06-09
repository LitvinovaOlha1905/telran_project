import React, { useContext } from 'react'
import styles from "./CategoriesContainer.module.css";
import { useSelector } from 'react-redux';
import CategoriesCard from './CategoriesCard';
import { Context } from '../../context';

export default function CategoriesContainer() {

  const { nightMode } = useContext(Context);
  
  const { categories } = useSelector((state) => state.categories);
  
    return (
    <div className={styles.wrapper}>
      <div className="container">
        
        <div className={styles.titleBlock}>
          <h2 className={`${styles.title} ${
              nightMode ? styles.night_mode : ""
            }`}>Categories</h2>
        </div>

        <div className={styles.cardContainer}>
          {categories.map((el) => (
            <CategoriesCard key={el.id} {...el} />
          ))}
        </div>
      </div>
    </div>
  );
}
