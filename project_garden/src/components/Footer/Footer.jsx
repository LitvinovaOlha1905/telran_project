import React from "react";
import styles from "./Footer.module.css";
import insta from "../../images/Footer/Insta.svg";
import wa from "../../images/Footer/WA.svg";
import Map from "../Map/Map";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <h2>Contact</h2>
        <div className={styles.infoContainer}>
          <div className={styles.infoBlock}>
            <h6>Phone</h6>
            <a href="tel:+499999999999">+49 999 999 99 99</a>
          </div>

          <div className={styles.infoBlock}>
            <h6>Socials</h6>

            <div className={styles.iconsBlock}>
              <a href="https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ==">
                <img src={insta} alt="Tel-Ran Instagram" />
              </a>

              <a href="https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ==">
                <img src={wa} alt="Tel-Ran Whats App" />
              </a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <h6>Address</h6>
            <p>Linksraße 2, 8 OG, 10785, Berlin, Deutschland</p>
          </div>

          <div className={styles.infoBlock}>
            <h6>Working Hours</h6>
            <p>24 hours a day</p>
          </div>
        </div>
      </div>

      <Map />
    </div>
  );
}
