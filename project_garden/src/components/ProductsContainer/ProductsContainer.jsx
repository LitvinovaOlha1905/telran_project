import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from "../../store/slices/productsSlice"
import ProductCard from "../ProductCard/ProductCard"
import styles from './ProductsContainer.module.css'

export default function ProductsContainer() {
	const dispatch = useDispatch()
	const { products, status } = useSelector(state => state.products)

	useEffect(() => {
		dispatch(fetchAllProducts())
	}, [dispatch])

	console.log(products)

	if (status === "loading") {
		return <h1>Loading...</h1>
	}

	return (
		<div className={styles.productsBlock}>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}
