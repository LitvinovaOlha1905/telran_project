import React from "react";
import { Link } from "react-router-dom";
import four from "../../images/NotFoundPage/4.svg";
import Cactus from "../../images/NotFoundPage/cactus.svg";
import five from "../../images/NotFoundPage/5.svg";
import style from "./NotFoundPage.module.css";
import { useContext } from "react";
import { Context } from "../../context";

export default function NotFoundPage() {
	const { nightMode } = useContext(Context);

	return (
		<div className={style.wrapper}>
			<div className='container'>
				<div className={style.contentBlock}>
					<div className={style.imgBlock}>
						<img src={four} alt='404 Error' className={style.image} />
						<img src={Cactus} alt='404 Error' className={style.imageCactus} />
						<img src={five} alt='404 Error' className={style.image} />
					</div>
					<div className={style.titleBlock}>
						<h1
							className={`${style.title} ${nightMode ? style.night_mode : ""}`}
						>
							Page Not Found
						</h1>
						<p className={style.text}>
							We’re sorry, the page you requested could not be found.{" "}
							<span>Please go back to the homepage.</span>
						</p>
						<Link to='/'>
							<button className={style.button}>Go Home</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
