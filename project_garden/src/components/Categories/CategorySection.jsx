import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import styles from './CategorySection.module.css';
import CategoriesCard from './CategoriesCard';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

export default function CategorySection() {

  const { nightMode } = useContext(Context);
  
  const { categories } = useSelector((state) => state.categories);

    const limitedCategories = categories.slice(0, 4);
  // Создаем новый массив, содержащий только первые 4 категории

    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.titleBlock}>
            <h2 className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>Categories</h2>

            <div className={styles.titleBlockLine}>
              <div className={styles.line}></div>

              <Link to="/categories/all">
                <button className={styles.btn}>All categories</button>
              </Link>
            </div>
          </div>

          <div className={styles.cardContainer}>
            {limitedCategories.map((el) => (
              <CategoriesCard key={el.id} {...el} />
            ))}
          </div>
        </div>
      </div>
    );
}
