import React from 'react'
import { Link } from 'react-router-dom';
import four from "../../images/NotFoundPage/4.svg";
import Cactus from "../../images/NotFoundPage/cactus.svg";
import five from "../../images/NotFoundPage/5.svg";
import style from "./NotFoundPage.module.css";


export default function NotFoundPage() {
  return (
    <div className={style.wrapper}>
      <div className='container'>
        <div className={style.contentBlock}>
          <div>
             <img src={four} alt="404 Error" />
             <img src={Cactus} alt="404 Error" />
             <img src={five} alt="404 Error" />
          </div>
          <div className={style.titleBlock}>
             <h1 className={style.title}>Not Found Page</h1>
             <p className={style.text}>We’re sorry, the page you requested could not be found.<br />
            Please go back to the homepage.</p>
          <Link to="/">
            <button className={style.button}>Go Home</button>
          </Link>
          </div>
       </div>
      </div>
    </div>
  )
}
