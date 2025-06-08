export enum ButtonVariants {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	DANGER = "danger",
	OUTLINE = "outline",
}

export enum ButtonSizes {
	SMALL = "small",
	MEDIUM = "medium",
	LARGE = "large",
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Вариант кнопки */
	variant?: ButtonVariants
	/** Размер кнопки */
	size?: ButtonSizes
	/** Состояние загрузки */
	loading?: boolean
	/** Полная ширина */
	fullWidth?: boolean
	/** Иконка слева */
	leftIcon?: React.ReactNode
	/** Иконка справа */
	rightIcon?: React.ReactNode
	/** Дочерние элементы */
	children: React.ReactNode
}
