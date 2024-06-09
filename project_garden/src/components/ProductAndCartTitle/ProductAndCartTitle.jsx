import { useContext } from 'react';
import classes from './ProductAndCartTitle.module.css';
import { Context } from '../../context';


const ProductAndCartTitle = ({ text, weight, none }) => {

 const { nightMode } = useContext(Context);

  return (
    <h3
      className={`${classes.txt} ${nightMode ? classes.night_mode : ""}`}
      style={{
        fontWeight: weight ? "600" : "700",
        color: none ? "var(--black)" : "",
      }}
    >
      {text}
    </h3>
  );
};
export default ProductAndCartTitle;
