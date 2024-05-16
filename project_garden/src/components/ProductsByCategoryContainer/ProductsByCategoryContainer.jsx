import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductByCategoryCard from '../ProductByCategoryCard/ProductByCategoryCard';
import { fetchProductsByCategory } from '../../store/slices/dataSlice';
import { useParams } from 'react-router-dom';
import styles from './ProductsByCategoryContainer.module.css'

export default function ProductsByCategoryContainer() { 

    const { categoryId } = useParams();

    const dispatch = useDispatch();

    const { status, products, currentCategory } = useSelector(
      (state) => state.data
    );
    
    useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId));
    }, [dispatch, categoryId]);

  console.log(currentCategory);
  return (
    <div>
      {currentCategory && (
        <h1 className={styles.title}>{currentCategory.title}</h1>
      )}
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productsBlock}>
          {products.map((el) => (
            <ProductByCategoryCard key={el.id} {...el} />
          ))}
        </div>
      )}
    </div>
  );
}
