import React, { useContext, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";
import iconTree from "../../images/Header/tree.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heartHeder.svg";
import { ReactComponent as IconBag } from "../../images/Icons/bagHeder.svg";
import { ReactComponent as IconHeartNight } from "../../images/Icons/heartNight.svg";
import { ReactComponent as IconBagNight } from "../../images/Icons/bagNight.svg";
import { ReactComponent as ModeNight } from "../../images/Icons/modeNight.svg";
import { ReactComponent as ModeDay } from "../../images/Icons/modeDay.svg";
import { ReactComponent as BurgerDay } from "../../images/Icons/burgerDay.svg";
import { ReactComponent as BurgerNight } from "../../images/Icons/burgerNight.svg";
import { Link } from "react-router-dom";
import { Context } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import ModalNavMenu from "../ModalNavMenu/ModalNavMenu";

const Header = () => {
  const [navMenuActive, setNavMenuActive] = useState(false);
  const dispatch = useDispatch();
  const { nightMode } = useContext(Context);

  const { productsInCart = [] } = useSelector((store) => store.cart);
  const likedProducts = useSelector((store) => store.favorites.favorites) || [];



  return (
		<header className={styles.wrapper}>
			<div className='container'>
				<div className={styles.header_container}>
					<div className={styles.logoBlock}>
						<img src={iconTree} alt='Logo' className={styles.logo} />

						{nightMode ? (
							<ModeNight
								onClick={() => dispatch(toggleTheme())}
								className={styles.iconMode}
							/>
						) : (
							<ModeDay
								onClick={() => dispatch(toggleTheme())}
								className={styles.iconMode}
							/>
						)}
					</div>
					<div>
						{navMenuActive ? (
							<ModalNavMenu
								navMenuActive={navMenuActive}
								setNavMenuActive={setNavMenuActive}
							/>
						) : (
							<NavMenu />
						)}
					</div>

					<div className={styles.cartFlex}>
						<div className={styles.cartBlock}>
							<Link to='/favorites_products' className={styles.iconLink}>
								{nightMode ? (
									<IconHeartNight
										className={`${styles.iconNight} ${styles.icon}`}
									/>
								) : (
									<IconHeart className={`${styles.iconDay} ${styles.icon}`} />
								)}

								{likedProducts.length > 0 && (
									<span className={styles.badgeCount}>
										{likedProducts.length}
									</span>
								)}
							</Link>

							<Link to='/cart' className={styles.iconLink}>
								{nightMode ? (
									<IconBagNight
										className={`${styles.iconNight} ${styles.icon}`}
									/>
								) : (
									<IconBag className={`${styles.iconDay} ${styles.icon}`} />
								)}

								{productsInCart.length > 0 && (
									<span className={styles.badgeCount}>
										{productsInCart.length}
									</span>
								)}
							</Link>
						</div>

						{nightMode ? (
							<BurgerNight
								onClick={() => setNavMenuActive(true)}
								className={`${styles.burger} ${
									navMenuActive ? styles.nav_menu_active : ""
								}`}
							/>
						) : (
							<BurgerDay
								onClick={() => setNavMenuActive(true)}
								className={`${styles.burger} ${
									navMenuActive ? styles.nav_menu_active : ""
								}`}
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
