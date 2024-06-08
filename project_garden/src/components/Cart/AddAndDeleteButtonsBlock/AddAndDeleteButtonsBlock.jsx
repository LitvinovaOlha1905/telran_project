
import classes from './AddAndDeleteButtonsBlock.module.css';
import minus from '../../../images/Icons/minus.svg'
import plus from '../../../images/Icons/plus.svg';
import { useContext } from 'react';
import { Context } from '../../../context';

const AddAndDeleteButtonsBlock = ({
  quantity,
  handleAddToCart,
  handleDecreaseProduct,
}) => {

  const { nightMode } = useContext(Context);

  return (
    <div className={classes.wrapper}>
      <div className={`${classes.line} ${classes.top}`}></div>
      <button className={classes.btn} onClick={handleDecreaseProduct}>
        <img src={minus} alt="Minus" />
      </button>
      <p className={`${classes.count} ${nightMode ? classes.night_mode : ""}`}>
        {quantity ? quantity : 0}
      </p>
      <button className={classes.btn} onClick={handleAddToCart}>
        <img src={plus} alt="Plus" />
      </button>
      <div className={`${classes.line} ${classes.bottom}`}></div>
    </div>
  );
};

export default AddAndDeleteButtonsBlock;
