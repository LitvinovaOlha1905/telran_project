import React, { useContext } from 'react'
import styles from './ModalProductImg.module.css'
import { useSelector } from 'react-redux';
import { Context } from '../../context';

export default function ModalProductImg() {

    const { nightMode } = useContext(Context);

    const { modalActive, setModalActive } = useContext(Context);
    
    const singleProductState = useSelector((store) => store.singleProduct);
   
    const { product } = singleProductState;

    const [{ title,  image }] = product;

    
   return (
			<div
				className={`${styles.modal} ${nightMode ? styles.night_mode : ""} ${
					modalActive ? styles.active : ""
				}`}
				onClick={() => {
					setModalActive(false);
				}}
			>
				<div
					className={styles.modal_content}
					onClick={event => event.stopPropagation()}
				>
					<img
						src={`https://project-backend-hvmn.onrender.com${image}`}
						alt={title}
					/>
				</div>
			</div>
		);
}
