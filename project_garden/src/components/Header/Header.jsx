import React from "react";
import NavMenu from "../NavMenu/NavMenu";
import styles from "./Header.module.css"; 
import iconTree from "../../images/Header/tree.svg";
import iconHeart from "../../images/Header/heart.svg";
import iconBag from "../../images/Header/bag.svg";
import modeNight from "../../images/Header/modeNight.svg"; // Импортируем изображения для режимов
import modeDay from "../../images/Header/modeDay.svg";
import { useDispatch, useSelector } from "react-redux"
import {toggleTheme} from "../../store/slices/themeSlice"


const Header = () => {
  const dispatch = useDispatch()
  const {theme} = useSelector(state => state.theme)  
  
  return (
    <header className={`${styles.header}, ${theme === "dark" ? styles.dark : ""} `}>
        <div className="container">
            <div className={styles.wrapper}>

      <div className={styles.logoBlock}>
        <img src={iconTree} alt="Logo" className={styles.logo} />
        <img src={theme === "dark" ? modeNight : modeDay} 
             alt='Change theme'
             onClick={() => dispatch(toggleTheme())} 
             />
      </div>
        
      <NavMenu />
      <div className={styles.cartBlock}>
        <img src={iconHeart} alt="First Image"/>
        <img src={iconBag} alt="Second Image"/>
      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;

