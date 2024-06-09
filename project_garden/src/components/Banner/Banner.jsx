import React from "react"
import styles from "./Banner.module.css"
import { Link } from "react-router-dom"

export default function Banner() {
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div>
					<h1 className={styles.title}>
						Amazing Discounts on Garden Products!
					</h1>
					<Link to='/categories/all'>
						<button className={styles.btn}>Check out</button>
					</Link>
				</div>
			</div>
		</div>
	)
}
