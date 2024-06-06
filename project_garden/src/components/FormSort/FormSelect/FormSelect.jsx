import React, { useState } from "react";
import styles from "./FormSelect.module.css";
import { useDispatch } from "react-redux";
import CustomSelect from "../CustomComponents/CustomSelect/CustomSelect";
import { sortProducts } from "../../../store/slices/productsSlice";

export default function FormSelect() {
	const [selectedOption, setSelectedOption] = useState("default");

	const dispatch = useDispatch();

	const sort = event => {
		const selectedValue = event.target.value;
		dispatch(sortProducts(selectedValue));
		setSelectedOption(selectedValue);
	};

	return (
		<div>
			<form className={styles.formSortBlock}>
				<label className={styles.sortLabel} htmlFor='sortSelect'>
					<h3>Sorted</h3>
					<CustomSelect
						selected={selectedOption}
						onChange={sort}
					/>
				</label>
			</form>
		</div>
	);
}
