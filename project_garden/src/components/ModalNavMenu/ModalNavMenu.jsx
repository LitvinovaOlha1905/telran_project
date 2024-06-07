import React, { useContext } from 'react'
import styles from './ModalNavMenu.module.css'
import { ReactComponent as CloseDay } from "../../images/Icons/closeDay.svg";
import { ReactComponent as CloseNight } from "../../images/Icons/close.svg";
import { Link } from 'react-router-dom';
import { Context } from "../../context";

export default function ModalNavMenu({ navMenuActive, setNavMenuActive }) {
  
  const { setModalDayActive } = useContext(Context);
  
   const { nightMode } = useContext(Context);

  return (
    <div className={styles.modal}>
      <div
        className={`${styles.modal_content} ${
          nightMode ? styles.night_mode : ""
        }`}
      >
        {nightMode ? (
          <CloseNight onClick={() => setNavMenuActive(false)} />
        ) : (
          <CloseDay
            onClick={() => setNavMenuActive(false)}
            className={styles.icon}
          />
        )}

        <div
          className={`${styles.nav_menu} ${nightMode ? styles.night_mode : ""}`}
        >
          <Link to="/" onClick={() => setNavMenuActive(false)}>
            Main Page
          </Link>
          <Link to="/categories/all" onClick={() => setNavMenuActive(false)}>
            Categories
          </Link>
          <Link to="/products/all" onClick={() => setNavMenuActive(false)}>
            All products
          </Link>
          <Link to="/sales/all" onClick={() => setNavMenuActive(false)}>
            All sales
          </Link>
          <Link>
            <div
              className={styles.oneDaySaleButton}
              onClick={() => {
                setModalDayActive(true);
                setNavMenuActive(false);
              }}
            >
              1 day discount
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
