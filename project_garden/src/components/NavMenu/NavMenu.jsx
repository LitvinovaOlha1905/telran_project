import React from "react"
import { Link } from "react-router-dom"
import styles from "./NavMenu.module.css"

export default function NavMenu() {
	return (
		<div className={styles.nav_menu}>
			<Link to='/'>Main Page</Link>
			<Link to='/categories/all'>Categories</Link>
			<Link to='/products/all'>All products</Link>
			<Link to='/sales/all'>All sales</Link>
		</div>
	)
}
