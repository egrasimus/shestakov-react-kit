import type { FC } from "react"
import styles from "./Spinner.module.scss"

export const Spinner: FC = () => {
	return (
		<span className={styles.spinner} aria-hidden='true'>
			<svg
				className={styles.spinnerIcon}
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle
					cx='12'
					cy='12'
					r='10'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeDasharray='32'
					strokeDashoffset='32'
				/>
			</svg>
		</span>
	)
}
