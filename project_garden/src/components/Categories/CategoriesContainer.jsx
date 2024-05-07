import React, { useEffect } from 'react'
import styles from "./CategoriesContainer.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllCategories } from '../../store/slices/categoriesSlice';
import { Link } from 'react-router-dom';
import CategoriesCard from './CategoriesCard';

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const { categories, status } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  console.log(categories);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  const limitedCategories = categories.slice(0, 4);
  // Создаем новый массив, содержащий только первые 4 категории

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.titleBlock}>
          <h2>Categories</h2>

          <div className={styles.titleBlockLine }>
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
