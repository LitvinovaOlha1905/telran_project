import { ReactComponent as Minus } from "../../images/Icons/minus.svg";
import { ReactComponent as Plus } from "../../images/Icons/plus.svg";
import classes from "./AddAndDeleteButtonsBlock.module.css";
import { useContext } from "react";
import { Context } from "../../context";

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
        <Minus/>
      </button>

      <p className={`${classes.count} ${nightMode ? classes.night_mode : ""}`}>
        {quantity ? quantity : 0}
      </p>
      <button className={classes.btn} onClick={handleAddToCart}>
        <Plus />
      </button>
      <div className={`${classes.line} ${classes.bottom}`}></div>
    </div>
  );
};

export default AddAndDeleteButtonsBlock;
