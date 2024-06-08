import { useSelector } from "react-redux";
import classes from "./MainBannerButton.module.css";

const MainBannerButton = ({ text, textSmallBtn, dontClick }) => {
  const { theme } = useSelector((state) => state.theme);
  return (
    <button
      className={`${text ? classes.wrapper : classes.btn} ${
        dontClick ? classes.dontActive : ""
      } ${theme === "dark" ? classes.dark : ""}`}
    >
      {text ? text : textSmallBtn}
    </button>
  );
};

export default MainBannerButton;
