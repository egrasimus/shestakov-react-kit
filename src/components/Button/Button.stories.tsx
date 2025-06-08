import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "storybook/test"
import { Button } from "./Button"

// Иконки для примеров
const ChevronRightIcon = () => (
	<svg fill='none' viewBox='0 0 24 24' stroke='currentColor'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M9 5l7 7-7 7'
		/>
	</svg>
)

const PlusIcon = () => (
	<svg fill='none' viewBox='0 0 24 24' stroke='currentColor'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M12 4v16m8-8H4'
		/>
	</svg>
)

const DownloadIcon = () => (
	<svg fill='none' viewBox='0 0 24 24' stroke='currentColor'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth={2}
			d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
		/>
	</svg>
)

const meta: Meta<typeof Button> = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
Компонент Button предоставляет стандартизированные кнопки с различными вариантами оформления.

## Особенности:
- 4 варианта оформления: primary, secondary, danger, outline
- 3 размера: small, medium, large
- Состояние загрузки с анимированным спиннером
- Поддержка иконок слева и справа
- Полная ширина (fullWidth)
- Доступность (ARIA атрибуты)
- TypeScript типизация
        `,
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: { type: "select" },
			options: ["primary", "secondary", "danger", "outline"],
			description: "Вариант оформления кнопки",
		},
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
			description: "Размер кнопки",
		},
		loading: {
			control: { type: "boolean" },
			description: "Показать индикатор загрузки",
		},
		disabled: {
			control: { type: "boolean" },
			description: "Отключить кнопку",
		},
		fullWidth: {
			control: { type: "boolean" },
			description: "Растянуть на всю ширину контейнера",
		},
		children: {
			control: { type: "text" },
			description: "Текст кнопки",
		},
		onClick: {
			action: "clicked",
			description: "Обработчик клика",
		},
	},
	args: {
		onClick: fn(),
		children: "Button",
	},
}

export default meta
type Story = StoryObj<typeof meta>

// Основные варианты
export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Primary Button",
	},
}

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary Button",
	},
}

export const Danger: Story = {
	args: {
		variant: "danger",
		children: "Delete",
	},
}

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline Button",
	},
}

// Размеры
export const Sizes: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
			<Button size='small'>Small</Button>
			<Button size='medium'>Medium</Button>
			<Button size='large'>Large</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story:
					"Доступны три размера кнопок: small, medium (по умолчанию) и large.",
			},
		},
	},
}

// Состояния
export const States: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Button>Normal</Button>
			<Button disabled>Disabled</Button>
			<Button loading>Loading</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Кнопка может быть в состоянии загрузки или отключена.",
			},
		},
	},
}

// С иконками
export const WithIcons: Story = {
	render: () => (
		<div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
			<Button leftIcon={<PlusIcon />}>Add Item</Button>
			<Button rightIcon={<ChevronRightIcon />}>Next</Button>
			<Button leftIcon={<DownloadIcon />} variant='outline'>
				Download
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Кнопки могут содержать иконки слева или справа от текста.",
			},
		},
	},
}

// Полная ширина
export const FullWidth: Story = {
	args: {
		fullWidth: true,
		children: "Full Width Button",
	},
	parameters: {
		docs: {
			description: {
				story: "Кнопка может растягиваться на всю ширину контейнера.",
			},
		},
	},
}

// Все варианты в одном месте
export const AllVariants: Story = {
	render: () => (
		<div style={{ display: "grid", gap: "16px", maxWidth: "300px" }}>
			<Button variant='primary'>Primary</Button>
			<Button variant='secondary'>Secondary</Button>
			<Button variant='danger'>Danger</Button>
			<Button variant='outline'>Outline</Button>
			<Button variant='primary' disabled>
				Disabled Primary
			</Button>
			<Button variant='secondary' loading>
				Loading Secondary
			</Button>
			<Button variant='outline' leftIcon={<PlusIcon />}>
				With Icon
			</Button>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: "Все доступные варианты кнопок в одном месте для сравнения.",
			},
		},
	},
}

// Интерактивная кнопка для playground
export const Playground: Story = {
	args: {
		variant: "primary",
		size: "medium",
		children: "Click me!",
		loading: false,
		disabled: false,
		fullWidth: false,
	},
}
