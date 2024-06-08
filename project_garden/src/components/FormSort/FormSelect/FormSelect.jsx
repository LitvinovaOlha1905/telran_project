import React, { useContext, useState } from "react";
import styles from "./FormSelect.module.css";
import { useDispatch } from "react-redux";
import CustomSelect from "../CustomComponents/CustomSelect/CustomSelect";
import { sortProducts } from "../../../store/slices/productsSlice";
import { Context } from "../../../context";
import { sortFavorits } from "../../../store/slices/favoritesSlice";
import { sortProductsData } from "../../../store/slices/dataSlice";

export default function FormSelect() {

	const { nightMode } = useContext(Context);

	const [selectedOption, setSelectedOption] = useState("default");

	const dispatch = useDispatch();

	const sort = event => {
		const selectedValue = event.target.value;
		dispatch(sortProducts(selectedValue));
		dispatch(sortFavorits(selectedValue));
		dispatch(sortProductsData(selectedValue));
		setSelectedOption(selectedValue);
	};

	return (
		<form className={styles.formSortBlock}>
			<label className={styles.sortLabel} htmlFor='sortSelect'>
				<h3
					className={`${styles.sortTitle} ${
						nightMode ? styles.night_mode : ""
					}`}
				>
					Sorted
				</h3>
				<CustomSelect selected={selectedOption} onChange={sort} />
			</label>
		</form>
	);
}
