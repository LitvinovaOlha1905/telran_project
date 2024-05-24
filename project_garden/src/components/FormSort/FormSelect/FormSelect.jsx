import React, { useState } from "react";
import styles from "./FormSelect.module.css";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../../store/slices/filterSlice";
import CustomSelect from "../CustomComponents/CustomSelect/CustomSelect";

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
					<CustomSelect selected={selectedOption} onChange={sort} />
				</label>
			</form>
		</div>
	);
}
