import React from "react";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <iframe
      title="TelRan-Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4095566178266!2d13.372520477010559!3d52.50792683712289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sde!2sde!4v1714231255891!5m2!1sde!2sde"
      className={styles.mapContainer}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
