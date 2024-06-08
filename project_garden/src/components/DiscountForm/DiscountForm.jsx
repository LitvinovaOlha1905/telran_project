import { useForm } from "react-hook-form";
import styles from "../DiscountForm/DiscountForm.module.css";

const DiscountForm = () => {
	const {
		register,

		formState: { errors },
	} = useForm({ mode: "onBlur" });
	const telRegister = register("tel", {
		required: "*Phone number input is required",
		pattern: {
			value: /^\+49\d{11}$/,
			message: "*Phone number value does not correspond the required format",
		},
	});
	const nameRegister = register("name", {
		required: "*Name input is required",
	});
	const emailRegister = register("email", {
		required: "*Email input is required",
		pattern: {
			value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			message: "*Invalid email address format",
		},
	});

	return (
		<form className={styles.form}>
			<div className={styles.inputContainer}>
				<div>
					<input
						className={styles.input}
						type='name'
						placeholder={"Name"}
						name='name'
						{...nameRegister}
					/>
					<div className={styles.container_error}>
						{errors.name && (
							<p className={styles.error}>{errors.name.message}</p>
						)}
					</div>
				</div>

				<div>
					<input
						className={styles.input}
						type='tel'
						placeholder={"Phone number"}
						name='tel'
						{...telRegister}
					/>
					<div className={styles.container_error}>
						{errors.tel && <p className={styles.error}>{errors.tel.message}</p>}
					</div>
				</div>

				<div>
					<input
						className={styles.input}
						type='email'
						placeholder={"Email"}
						name='email'
						{...emailRegister}
					/>
					<div className={styles.container_error}>
						{errors.email && (
							<p className={styles.error}>{errors.email.message}</p>
						)}
					</div>
				</div>
			</div>

			<button className={styles.btn}>Get a discount</button>
		</form>
	);
};

export default DiscountForm;
