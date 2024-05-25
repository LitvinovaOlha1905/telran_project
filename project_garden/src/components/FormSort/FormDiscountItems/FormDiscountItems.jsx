import React, { useEffect, useState } from "react";
import styles from "./FormDiscountItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as IconCheckbox } from "../../../images/Icons/checkbox.svg";
import { ReactComponent as IconCheckboxActive } from "../../../images/Icons/checkboxActive.svg";
import {
	getCheapProducts,
	selectProducts,
	setFilteredProducts,
} from "../../../store/slices/productsSlice";

export default function FormDiscountItems() {
	const [isActive, setIsActive] = useState(false);

	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	useEffect(() => {
		if (isActive) {
			dispatch(getCheapProducts({ checked: true }));
		} else {
			dispatch(setFilteredProducts(products));
		}
	}, [isActive, dispatch]);

	const handleCheck = () => {
		setIsActive(prev => !prev);
	};

	return (
		<form className={styles.sortBlock}>
			<h1 className={styles.sortTitle}>Discounted items</h1>
			<label>
				<input
					className={styles.sortDiscountInput}
					type='checkbox'
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
