import { useContext } from 'react';
import { Context } from '../../../context';
import classes from './TitleH2.module.css';

const TitleH2 = ({ text }) => {

  const { nightMode } = useContext(Context);

  return (
    <h2 className={`${classes.title} ${nightMode ? classes.night_mode : ""}`}>
      {text}
    </h2>
  );
};

export default TitleH2;
