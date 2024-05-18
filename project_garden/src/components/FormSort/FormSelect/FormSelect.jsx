import React from "react";
import styles from "./FormSelect.module.css";
import { useDispatch } from "react-redux";
import { sortProducts } from "../../../store/slices/filterSlice";
// import CustomSelect from "../CustomComponents/CustomSelect/CustomSelect";

export default function FormSelect() {
	const dispatch = useDispatch();

	const sort = event => {
		dispatch(sortProducts(event.target.value));
	};

	return (
		<div>
			{/* Select - уточнить у Нелли как стилизрвать option */}
			<form className={styles.formSortBlock}>
				<label className={styles.sortLabel} htmlFor='sortSelect'>
					Sorted
				</label>

				<select
					className={styles.sortSelect}
					id='sortSelect'
					defaultValue='default'
					onChange={sort}
				>
					<option value='default' disabled>
						by default
					</option>
					<option value='priceAsc' className={styles.option}>
						low to high
					</option>
					<option value='priceDesc'>high to low</option>
					<option value='name'>by name</option>
				</select>

				{/* <CustomSelect selected='default' onChange={sort} /> */}
			</form>
		</div>
	);
}
