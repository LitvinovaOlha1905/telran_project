import React, { useEffect } from "react"
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer"
import styles from "./AllProductsPage.module.css"
import Sceleton from "../../components/Sceleton/Skeleton"

export default function AllProductsPage() {
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
            <div className='container'>
                <h1 className={styles.title}>All products</h1>
               
                {isLoading ? <Sceleton /> : <ProductsContainer />}
            </div>
        </div>
    )
}
