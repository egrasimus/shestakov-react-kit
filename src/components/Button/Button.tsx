import clsx from "clsx"
import styles from "./Button.module.scss"
import { ButtonSizes, ButtonVariants, type ButtonProps } from "./types"
import { Spinner } from "../Spinner/Spinner"
import type { FC } from "react"

export const Button: FC<ButtonProps> = ({
	variant = ButtonVariants.PRIMARY,
	size = ButtonSizes.MEDIUM,
	loading,
	fullWidth,
	leftIcon,
	rightIcon,
	disabled,
	className,
	children,
	type = "button",
	...props
}) => {
	const buttonClasses = clsx(
		styles.button,
		styles[`button--${variant}`],
		styles[`button--${size}`],
		{
			[styles["button--loading"]]: loading,
			[styles["button--fullWidth"]]: fullWidth,
			[styles["button--disabled"]]: disabled || loading,
		},
		className
	)

	return (
		<button
			type={type}
			className={buttonClasses}
			disabled={disabled || loading}
			aria-busy={loading}
			{...props}
		>
			{loading && <Spinner />}
			{!loading && leftIcon && (
				<span className={styles.icon} aria-hidden='true'>
					{leftIcon}
				</span>
			)}
			<span className={styles.content}>{children}</span>
			{!loading && rightIcon && (
				<span className={styles.icon} aria-hidden='true'>
					{rightIcon}
				</span>
			)}
		</button>
	)
}
