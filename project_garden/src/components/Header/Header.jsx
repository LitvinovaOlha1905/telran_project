import React, { useContext, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";
import iconTree from "../../images/Header/tree.svg";
import { ReactComponent as IconHeart } from "../../images/Header/heart.svg";
import { ReactComponent as IconBag } from "../../images/Header/bag.svg";
import { ReactComponent as ModeNight } from "../../images/Header/modeNight.svg";
import { ReactComponent as ModeDay } from "../../images/Header/modeDay.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from "../../context";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
	};
	
	const dispatch = useDispatch();

	const { nightMode } = useContext(Context);
		
  return (
    <header className={styles.header}>
      <div className="container">
        <div
          className={`${styles.wrapper} ${nightMode ? styles.night_mode : ""}`}
        >
          <div className={styles.logoBlock}>
            <img src={iconTree} alt="Logo" className={styles.logo} />
            {nightMode ? (
              <ModeNight onClick={() => dispatch(toggleTheme())} />
            ) : (
			  <ModeDay onClick={() => dispatch(toggleTheme())} />
            )}
          </div>
          <div
            className={`${styles.hideMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <NavMenu />
          </div>

          <div className={styles.cartBlock}>
            <Link to="/favorites_products">
              <IconHeart
                className={`${styles.icon} ${
                  nightMode ? styles.night_mode : ""
                }`}
              />
            </Link>
            <Link to="/cart">
              <IconBag
                className={`${styles.icon} ${
                  nightMode ? styles.night_mode : ""
                }`}
              />
            </Link>
            <RxHamburgerMenu
              className={styles.burger}
              onClick={toggleMenu}
              style={{
                height: "3em",
                width: "3em",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
