import React, { useEffect, useState } from "react";
import styles from "./FormDiscountItems.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../store/slices/productsSlice";
import {
	getCheapProducts,
	setFilteredProducts,
} from "../../../store/slices/filterSlice";
import { ReactComponent as IconCheckbox } from "../../../images/Icons/checkbox.svg";
import { IoIosCheckboxOutline } from "react-icons/io";

export default function FormDiscountItems() {
	const [checked, setChecked] = useState(false);
	const [checkboxActive, setCheckboxActive] = useState(false);

	const dispatch = useDispatch();
	const products = useSelector(selectProducts);

	useEffect(() => {
		dispatch(setFilteredProducts(products));
	}, [products, dispatch]);

	const handleCheck = () => {
		const newChecked = !checked;
		setChecked(newChecked);
		dispatch(getCheapProducts({ checked: newChecked }));
	};

	return (
		<form>
			<label className={styles.sortLabel}>
				Discounted items
				<input
					className={styles.sortDiscountInput}
					type='checkbox'
					checked={checked}
					onChange={handleCheck}
				/>
				<span
					className={styles.sortDiscountCheckbox}
					onClick={() => setCheckboxActive(!checkboxActive)}
				>
					{checkboxActive ? (
						<IoIosCheckboxOutline className={styles.iconCheckbox} />
					) : (
						<IconCheckbox />
					)}
				</span>
			</label>
		</form>
	);
}
