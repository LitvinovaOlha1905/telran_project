import React, { useEffect, useState } from "react";
import styles from "./CustomSelect.module.css";
import { ReactComponent as SelectDown } from "../../../../images/Icons/selectDown.svg";
import { ReactComponent as SelectUp } from "../../../../images/Icons/selectUp.svg";

export default function CustomSelect({ onChange, selected }) {
	const [isActive, setIsActive] = useState(false);
	const [selectedLabel, setSelectedLabel] = useState("by default");

	const options = [
		{ value: "default", label: "by default" },
		{ value: "dateAdded", label: "newest" },
		{ value: "priceDesc", label: "price: high-low" },
		{ value: "priceAsc", label: "price: low-high" },
		{ value: "name", label: "by name" },
	];

	useEffect(() => {
		// Обновляем выбранное значение при изменении selected prop
		setSelectedLabel(
			options.find(option => option.value === selected)?.label || "by default"
		);
	}, [selected]);

	const handleOptionClick = option => {
		if (option.value !== "default") {
			setSelectedLabel(option.label);
			onChange({ target: { value: option.value } });
			setIsActive(false);
		}
	};

	return (
		<div className={styles.customSelect}>
			<div
				className={[styles.dropdown, styles.customSelectBlock].join(" ")}
				onClick={() => setIsActive(!isActive)}
			>
				{selectedLabel}
				{isActive ? <SelectUp size={22} /> : <SelectDown size={22} />}
			</div>
			<div>
				{isActive && (
					<div className={[styles.dropdownContent, styles.text].join(" ")}>
						{options.map(option => (
							<div
								className={[
									styles.dropdownItem,
									option.value === "default" ? styles.disabled : "",
								].join(" ")}
								key={option.value}
								onClick={() => handleOptionClick(option)}
							>
								{option.label}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
