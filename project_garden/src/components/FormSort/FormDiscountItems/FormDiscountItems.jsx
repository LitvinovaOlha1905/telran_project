import React, { useContext, useEffect, useState } from "react";
import styles from "./FormDiscountItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconCheckbox } from "../../../images/Icons/checkbox.svg";
import { ReactComponent as IconCheckboxActive } from "../../../images/Icons/checkboxActive.svg";
import {
  getCheapProducts,
  selectProducts,
  setFilteredProducts,
} from "../../../store/slices/productsSlice";
import { Context } from "../../../context";
import { getCheapProductsData, setFilteredProductsData } from "../../../store/slices/dataSlice";

export default function FormDiscountItems() {

  const { nightMode } = useContext(Context);
  
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (isActive) {
      dispatch(getCheapProducts({ checked: true }));
      dispatch(getCheapProductsData({ checked: true }));
    } else {
      dispatch(setFilteredProducts(products));
      dispatch(setFilteredProductsData(products));
    }
  }, [isActive, dispatch]);

  const handleCheck = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <form className={styles.sortBlock}>
      <h1
        className={`${styles.sortTitle} ${nightMode ? styles.night_mode : ""}`}
      >
        Discounted items
      </h1>
      <label>
        <input
          className={styles.sortDiscountInput}
          type="checkbox"
          checked={isActive}
          onChange={handleCheck}
        />
        <span className={styles.sortDiscountCheckbox}>
          {isActive ? <IconCheckboxActive /> : <IconCheckbox />}
        </span>
      </label>
    </form>
  );
}
