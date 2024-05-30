import React, { useContext } from 'react'
import styles from './ModalProductImg.module.css'
import { useSelector } from 'react-redux';
import { Context } from '../../context';

export default function ModalProductImg() {

    const { modalActive, setModalActive } = useContext(Context);
    
    const singleProductState = useSelector((store) => store.singleProduct);
   
    const { product } = singleProductState;

    const [{ title,  image }] = product;

    
   return (
     <div
       className={[styles.modal, modalActive ? styles.active : ""].join(" ")}
       onClick={() => {
         setModalActive(false);
       }}
     >
       <div
         className={styles.modal_content}
         onClick={(event) => event.stopPropagation()}
       >
         <img src={`http://localhost:3333${image}`} alt={title} />
       </div>
     </div>
   );
}
