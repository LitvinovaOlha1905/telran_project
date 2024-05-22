import React, { useEffect } from 'react'
import styles from "./ProductsByCategoryPage.module.css";
import ProductsByCategoryContainer from '../../components/ProductsByCategoryContainer/ProductsByCategoryContainer';
import Sceleton from '../../components/Sceleton/Skeleton';

export default function ProductsByCategoryPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

    return (
      <div className={styles.wrapper}>
        <div className="container">
          {isLoading ? <Sceleton /> : <ProductsByCategoryContainer />}
        </div>
      </div>
    );
}
