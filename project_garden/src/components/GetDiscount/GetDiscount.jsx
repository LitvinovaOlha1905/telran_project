import React from 'react';
import DiscountForm from '../DiscountForm/DiscountForm';
import image from '../../images/DiscountForm/image_form.png';
import styles from './GetDiscount.module.css'; 

const GetDiscount = () => {
  return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.formBlock}>
					<h2 className={styles.title}>5% off on the first order</h2>

					<div className={styles.containerForm}>
							<DiscountForm />
						<div className={styles.imgBlock}>
							<img className={styles.image} src={image} alt='Image' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetDiscount;
