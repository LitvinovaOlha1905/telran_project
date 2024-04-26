import React from 'react'
import styles from './Footer.module.css'
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";


export default function Footer() {
  return (
    <div className={styles.footer}>
      <h2>Contact</h2>
      <div className={styles.info_container}>

        <div>
          <h6>Phone</h6>
          <a href="tel:+499999999999">
            +49 999 999 99 99
          </a>
        </div>

        <div>
          <h6>Socials</h6>
          
          <div>
          <RiInstagramFill />
          <IoLogoWhatsapp />
          </div>
        </div>

        <div>
          <h6>Address</h6>
          <p>Linksraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        </div>

        <div>
          <h6>Working Hours</h6>
          <p>24 hours a day</p>
        </div>
      </div>
      
      <div>
        Карта
      </div>
       

    </div>
  )
}