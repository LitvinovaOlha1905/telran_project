import React, { useContext } from "react";
import styles from "./ModalNavMenu.module.css";
import { ReactComponent as CloseDay } from "../../images/Icons/closeDay.svg";
import { ReactComponent as CloseNight } from "../../images/Icons/close.svg";
import { Link } from "react-router-dom";
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
          <CloseNight
            className={styles.icon}
            onClick={() => setNavMenuActive(false)}
          />
        ) : (
          <CloseDay
            onClick={() => setNavMenuActive(false)}
            className={styles.icon}
          />
        )}

        <ul
          className={`${styles.nav_menu} ${nightMode ? styles.night_mode : ""}`}
        >
          <li>
            <Link to="/" onClick={() => setNavMenuActive(false)}>
              Main Page
            </Link>
          </li>
          <li>
            <Link to="/categories/all" onClick={() => setNavMenuActive(false)}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/products/all" onClick={() => setNavMenuActive(false)}>
              All products
            </Link>
          </li>
          <li>
            <Link to="/sales/all" onClick={() => setNavMenuActive(false)}>
              All sales
            </Link>
          </li>

          <Link>
            <button
              className={styles.oneDaySaleButton}
              onClick={() => {
                setModalDayActive(true);
                setNavMenuActive(false);
              }}
            >
              1 day discount
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}
