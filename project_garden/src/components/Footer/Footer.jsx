import React, { useContext } from "react";
import styles from "./Footer.module.css";
import Map from "../Map/Map";
import { ReactComponent as IconInsta } from "../../images/Icons/insta.svg";
import { ReactComponent as IconWA } from "../../images/Icons/whatsApp.svg";
import { ReactComponent as IconInstaNight } from "../../images/Icons/instaNight.svg";
import { ReactComponent as IconWANight } from "../../images/Icons/whatsAppNight.svg";
import { Context } from "../../context";

export default function Footer() {
	const { nightMode } = useContext(Context);

	return (
		<footer className={styles.footer}>
			<div className='container'>
				<h2 className={`${styles.title} ${nightMode ? styles.night_mode : ""}`}>
					Contact
				</h2>

				<div
					className={`${styles.infoContainer} ${
						nightMode ? styles.night_mode : ""
					}`}
				>
					<div
						className={`${styles.infoBlock} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						<h6 className={styles.infoTitle}>Phone</h6>
						<a
							className={`${styles.linkTel} ${
								nightMode ? styles.night_mode : ""
							}`}
							href='tel:+499999999999'
						>
							+49 999 999 99 99
						</a>
					</div>

					<div
						className={`${styles.infoBlock} ${styles.infoSocials} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						<h6 className={styles.infoTitle}>Socials</h6>

						<div className={styles.iconsBlock}>
							<a href='https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ=='>
								{nightMode ? <IconInstaNight /> : <IconInsta />}
							</a>

							<a href='https://www.instagram.com/startainstitute?igsh=MWR1azFwM3dhaHcxeQ=='>
								{nightMode ? <IconWANight /> : <IconWA />}
							</a>
						</div>
					</div>

					<div
						className={`${styles.infoBlock} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						<h6 className={styles.infoTitle}>Address</h6>
						<p
							className={`${styles.description} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							Linksraße 2, 8 OG, 10785, Berlin, Deutschland
						</p>
					</div>

					<div
						className={`${styles.infoBlock} ${
							nightMode ? styles.night_mode : ""
						}`}
					>
						<h6 className={styles.infoTitle}>Working Hours</h6>
						<p
							className={`${styles.description} ${
								nightMode ? styles.night_mode : ""
							}`}
						>
							24 hours a day
						</p>
					</div>
				</div>

				<div className={styles.mapBlock}>
					<Map />
					<div className={nightMode ? styles.night_mode : ""}></div>
				</div>
			</div>
		</footer>
	);
}
