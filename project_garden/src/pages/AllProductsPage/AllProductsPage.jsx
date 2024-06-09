import React, { useContext, useEffect } from "react"
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer"
import styles from "./AllProductsPage.module.css"
import Sceleton from "../../components/Sceleton/Skeleton"
import { Context } from "../../context";

export default function AllProductsPage() {

    const { nightMode } = useContext(Context);
    
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
          <h1
            className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}
          >
            All products
          </h1>

          {isLoading ? <Sceleton /> : <ProductsContainer />}
        </div>
      </div>
    );
}
