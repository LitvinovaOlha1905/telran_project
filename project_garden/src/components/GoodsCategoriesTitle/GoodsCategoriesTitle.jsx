import { useContext } from 'react';
import classes from './GoodsCategoriesTitle.module.css';
import { Context } from '../../context';

const GoodsCategoriesTitle = ({ text, footer, none }) => {
    const { nightMode } = useContext(Context);

  return (
    <h4
      className={`${classes.title} ${nightMode ? classes.night_mode : ""}`}
      style={{ color: none ? "var(--black)" : "" }}
    >
      {text}
    </h4>
  );
};
export default GoodsCategoriesTitle;
