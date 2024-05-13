import React from 'react'
import styles from "./ProductsByCategoryPage.module.css";
import ProductsByCategoryContainer from '../../components/ProductsByCategoryContainer/ProductsByCategoryContainer';

export default function ProductsByCategoryPage() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <ProductsByCategoryContainer/>
        </div>
      </div>
    );
}
