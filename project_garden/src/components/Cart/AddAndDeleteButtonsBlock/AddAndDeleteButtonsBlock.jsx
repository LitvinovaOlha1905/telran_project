import styles from './AddAndDeleteButtonsBlock.module.css';
import { ReactComponent as Minus } from "../../../images/Icons/minus.svg";
import { ReactComponent as Plus } from "../../../images/Icons/plus.svg";
import { useContext } from 'react';
import { Context } from '../../../context';

const AddAndDeleteButtonsBlock = ({
  quantity,
  handleAddToCart,
  handleDecreaseProduct,
}) => {
  const { nightMode } = useContext(Context);

  return (
		<div className={styles.wrapper}>
			<div className={`${styles.line} ${styles.top}`}></div>
			<button className={styles.btn} onClick={handleDecreaseProduct}>
				<Minus
					className={`${styles.icons} ${nightMode ? styles.night_mode : ""}`}
				/>
			</button>

			<p className={`${styles.count} ${nightMode ? styles.night_mode : ""}`}>
				{quantity ? quantity : 0}
			</p>
			<button className={styles.btn} onClick={handleAddToCart}>
				<Plus
					className={`${styles.icons} ${nightMode ? styles.night_mode : ""}`}
				/>
			</button>
			<div className={`${styles.line} ${styles.bottom}`}></div>
		</div>
	);
};

export default AddAndDeleteButtonsBlock;
