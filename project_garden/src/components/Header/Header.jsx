import React, { useContext, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";
import iconTree from "../../images/Header/tree.svg";
import { ReactComponent as IconHeart } from "../../images/Icons/heartHeder.svg";
import { ReactComponent as IconBag } from "../../images/Icons/bagHeder.svg";
import { ReactComponent as ModeNight } from "../../images/Icons/modeNight.svg";
import { ReactComponent as ModeDay } from "../../images/Icons/modeDay.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import ModalNavMenu from "../ModalNavMenu/ModalNavMenu";

const Header = () => {

  const [navMenuActive, setNavMenuActive] = useState(false);
  const dispatch = useDispatch();
  const { nightMode } = useContext(Context);
  const { theme } = useSelector((state) => state.theme);
  const { productsInCart = [] } = useSelector((store) => store.cart);
  //const { likedProducts = [] } = useSelector((store) => store.likes);

  return (
    <header
      className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoBlock}>
            <img src={iconTree} alt="Logo" className={styles.logo} />

            {nightMode ? (
              <ModeNight onClick={() => dispatch(toggleTheme())} />
            ) : (
              <ModeDay onClick={() => dispatch(toggleTheme())} />
            )}
          </div>
          <div>{navMenuActive ? <ModalNavMenu navMenuActive={navMenuActive} setNavMenuActive={setNavMenuActive} /> : <NavMenu />}</div>

          <div className={styles.cartBlock}>
            <Link to="/favorites_products" className={styles.iconLink}>
              <IconHeart
                className={`${styles.icon} ${
                  nightMode ? styles.night_mode : ""
                }`}
              />

              {/* {likedProducts.length > 0 && (
                <span className={styles.badgeCount}>{likedProducts.length}</span>
              )} */}
            </Link>

            <Link to="/cart" className={styles.iconLink}>
              <IconBag
                className={`${styles.icon} ${
                  nightMode ? styles.night_mode : ""
                }`}
              />

              {productsInCart.length > 0 && (
                <span className={styles.badgeCount}>
                  {productsInCart.length}
                </span>
              )}
            </Link>
          </div>

          <RxHamburgerMenu
            onClick={() => setNavMenuActive(true)}
            className={`${styles.burger} ${
              navMenuActive ? styles.nav_menu_active : ""
            }`}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
