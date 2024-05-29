import React, { useState } from 'react'
import styles from './ProductByCategoryCard.module.css'
import { Link } from 'react-router-dom';
import { ReactComponent as IconBag } from "../../images/Icons/bag.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heart.svg";
import { ReactComponent as IconHertActive } from "../../images/Icons/heartActive.svg";
import { ReactComponent as IconBagActive } from "../../images/Icons/bagActive.svg";
import { addProduct, countTotalSum } from '../../store/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
export default function ProductByCategoryCard({ id, image, title, price, discont_price }) {
   
  // const [heartActive, setHeartActive] = useState(false);
  // const [bagActive, setBagActive] = useState(false);

  // const { productsInCart } = useSelector((store) => store.cart);

  // const dispatch = useDispatch();
  const product = {
    id: id,
    title: title,
    image: image,
    price: price,
    discont_price: discont_price,
  };
  // const handleAddToCart = (event) => {
  //   // event.preventDefault();
  //   console.log(product);
  //   dispatch(addProduct(product));
  //   dispatch(countTotalSum());
  //   console.log(productsInCart);
  // };
  
  
  return (
    <ProductCard
      id={id}
      title={title}
      image={image}
      price={price}
      discont_price={discont_price}
    />
    
  );
}
