import React from "react"
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer"
import styles from "./AllProductsPage.module.css"

export default function AllProductsPage() {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<h1 className={styles.title}>All products</h1>
				<ProductsContainer />
			</div>
		</div>
	)
}
