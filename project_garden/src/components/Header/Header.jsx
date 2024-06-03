import React, { useContext, useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css";
import iconTree from "../../images/Header/tree.svg";
import iconHeart from "../../images/Header/heart.svg";
import iconBag from "../../images/Header/bag.svg";
import { ReactComponent as ModeNight } from "../../images/Header/modeNight.svg";
import { ReactComponent as ModeDay } from "../../images/Header/modeDay.svg";
import { useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Context } from "../../context";

const Header = () => {
  const dispatch = useDispatch();
  
  const { nightMode, setNightMode } = useContext(Context);
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logoBlock}>
            <img src={iconTree} alt="Logo" className={styles.logo} />
            {nightMode ? (
              <ModeNight onClick={() => setNightMode(false)} />
            ) : (
              <ModeDay onClick={() => setNightMode(true)} />
            )}
          </div>
          <div
            className={`${styles.hideMenu} ${isMenuOpen ? styles.open : ""}`}
          >
            <NavMenu />
          </div>

          <div className={styles.cartBlock}>
            <Link to="/favorites_products">
              <img src={iconHeart} alt="Like" />
            </Link>
            <Link to="/cart">
              <img src={iconBag} alt="Bag" />
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
