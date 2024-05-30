import React from "react";
import styles from "./Footer.module.css";
import Map from "../Map/Map";
import { ReactComponent as IconInsta } from "../../images/Icons/insta.svg";
import { ReactComponent as IconWA } from "../../images/Icons/whatsApp.svg";

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
                  <IconInsta />
                </a>

                <a
                  className={styles.link}
                  href="https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ=="
                >
                  <IconWA />
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
