import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductByCategoryCard from '../ProductByCategoryCard/ProductByCategoryCard';
import { fetchProductsByCategory } from '../../store/slices/dataSlice';
import { useParams } from 'react-router-dom';

export default function ProductsByCategoryContainer() {

    const { categoryId } = useParams();

    const dispatch = useDispatch();

    const {status, currentCategory, products } = useSelector(
        (state) => state.data);

    useEffect(() => {
      dispatch(fetchProductsByCategory(categoryId));
    }, [dispatch, categoryId]);

   console.log(categoryId);
  return (
    <div>
      {products && <h1>{products.title}</h1>}
      {status === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((el) => (
            <ProductByCategoryCard key={el.id} {...el} />
          ))}
        </div>
      )}
    </div>
  );
}
