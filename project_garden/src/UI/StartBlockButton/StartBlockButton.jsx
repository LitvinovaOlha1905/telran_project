import { Link } from 'react-router-dom';
import classes from './StartBlockButton.module.css';
import { useSelector } from 'react-redux';

const StartBlockButton = ({ text, textSmallBtn, dontClick }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Link to="/">
      <button
        className={`${text ? classes.wrapper : classes.btn} ${
          dontClick ? classes.dontActive : ""
        } ${theme === "dark" ? classes.dark : ""}`}
      >
        {text ? text : textSmallBtn}
      </button>
    </Link>
  );
};
export default StartBlockButton;
