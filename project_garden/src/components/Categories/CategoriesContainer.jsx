import React from 'react'
import styles from "./CategoriesContainer.module.css";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';

export default function CategoriesContainer() {
  
  const { categories, status } = useSelector((state) => state.categories);
  
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        
        <div className={styles.titleBlock}>
          <h2>Categories</h2>
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
