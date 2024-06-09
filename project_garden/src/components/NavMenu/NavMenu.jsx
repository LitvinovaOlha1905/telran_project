import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.css";
import { Context } from "../../context";

export default function NavMenu() {
  
  const { setModalDayActive } = useContext(Context); 

  const { nightMode } = useContext(Context);
  return (
		<nav>
			<div className={styles.navMenuContainer}>
				<Link>
					<button
						className={styles.oneDaySaleButton}
						onClick={() => {
							setModalDayActive(true);
						}}
					>
						1 day discount
					</button>
				</Link>
				<ul className={`${styles.navMenu} `}>
					<li
						className={`${styles.item} ${nightMode ? styles.night_mode : ""}`}
					>
						<Link to='/'>Main Page</Link>
					</li>
					<li
						className={`${styles.item} ${nightMode ? styles.night_mode : ""}`}
					>
						<Link to='/categories/all'>Categories</Link>
					</li>
					<li
						className={`${styles.item} ${nightMode ? styles.night_mode : ""}`}
					>
						<Link to='/products/all'>All products</Link>
					</li>
					<li
						className={`${styles.item} ${nightMode ? styles.night_mode : ""}`}
					>
						<Link to='/sales/all'>All sales</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
