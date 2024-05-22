import React, { useState } from "react";
import styles from "./CustomSelect.module.css";
import { BiChevronDown } from "react-icons/bi";

export default function CustomSelect({ onChange}) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState("default");
	const options = ["low to high", "high to low", "by name"];

	const handleOptionClick = option => {
		onChange(option);
		setIsActive(false);
	};

	return (
		<div className={styles.customSelect}>
			<div
				className={[styles.dropdown, styles.text].join(" ")}
				onClick={() => setIsActive(!isActive)}
			>
				{selected}
				<BiChevronDown size={22} />
			</div>
			<div>
				{isActive && (
					<div className={[styles.dropdownContent, styles.text].join(" ")}>
						{options.map(option => (
							<div
								className={styles.dropdownItem}
								key={option}
								onClick={() => handleOptionClick(option)}
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
