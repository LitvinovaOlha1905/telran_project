import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductByCategoryCard from '../ProductByCategoryCard/ProductByCategoryCard';
import { fetchProductsByCategory } from '../../store/slices/dataSlice';
import { useParams } from 'react-router-dom';
import styles from './ProductsByCategoryContainer.module.css'
import FormSortPrice from '../FormSort/FormSortPrice/FormSortPrice';
import FormDiscountItems from '../FormSort/FormDiscountItems/FormDiscountItems';
import FormSelect from '../FormSort/FormSelect/FormSelect';
import { Context } from '../../context';


export default function ProductsByCategoryContainer() { 

   const { nightMode } = useContext(Context);

    const { categoryId } = useParams();

  const dispatch = useDispatch();
  
  // const { products } = useSelector((state) => state.products);

  const { currentCategory, products } = useSelector((state) => state.data);
  
    
    useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId));
    }, [dispatch, categoryId]);
  
  
  return (
    <div>
      {currentCategory && (
        <h1 className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>
          {currentCategory.title}
        </h1>
      )}
      <div className={styles.sortBlock}>
        {/* Price */}
        <FormSortPrice />

        {/* DiscountItems */}
        <FormDiscountItems />

        {/* Select */}
        <FormSelect />
      </div>

      <div className={styles.productsBlock}>
        {products.map(
          (el) => el.visible && <ProductByCategoryCard key={el.id} {...el} />
        )}
      </div>
    </div>
  );
}
