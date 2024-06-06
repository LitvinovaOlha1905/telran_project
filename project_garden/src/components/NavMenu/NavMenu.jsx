import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./NavMenu.module.css";
import { Context } from "../../context";

export default function NavMenu() {
  const { setModalDayActive } = useContext(Context);
  const { nightMode } = useContext(Context);
  return (
    <nav>
      <div className={styles.navBurger}>
        <Link>
          <div
            className={styles.oneDaySaleButton}
            onClick={() => {
               setModalDayActive(true);
            }}
          >
            1 day discount
          </div>
        </Link>
        <div className={`${styles.nav_menu} ${nightMode ? styles.night_mode : ""}`}>
          <Link to="/">Main Page</Link>
          <Link to="/categories/all">Categories</Link>
          <Link to="/products/all">All products</Link>
          <Link to="/sales/all">All sales</Link>
        </div>
      </div>
    </nav>
  );
}
