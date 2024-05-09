import React from "react";
import styles from "./Footer.module.css";
import insta from "../../images/Footer/Insta.svg";
import wa from "../../images/Footer/WA.svg";
import Map from "../Map/Map";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <h2 className={styles.title}>Contact</h2>
        <div>
          <div className={styles.infoContainer}>
            <div className={styles.infoBlock}>
              <h6 className={styles.infoTitle}>Phone</h6>
              <a className={styles.link} href="tel:+499999999999">
                +49 999 999 99 99
              </a>
            </div>

            <div className={styles.infoBlock}>
              <h6 className={styles.infoTitle}>Socials</h6>

              <div className={styles.iconsBlock}>
                <a
                  className={styles.link}
                  href="https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ=="
                >
                  <img src={insta} alt="Tel-Ran Instagram" />
                </a>

                <a
                  className={styles.link}
                  href="https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ=="
                >
                  <img src={wa} alt="Tel-Ran Whats App" />
                </a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h6 className={styles.infoTitle}>Address</h6>
              <p className={styles.description}>
                Linksraße 2, 8 OG, 10785, Berlin, Deutschland
              </p>
            </div>

            <div className={styles.infoBlock}>
              <h6 className={styles.infoTitle}>Working Hours</h6>
              <p className={styles.description}>24 hours a day</p>
            </div>
          </div>

          <Map />
        </div>
      </div>
    </footer>
  );
}
