import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "storybook/test"
import { Spinner } from "./Spinner"

const meta: Meta<typeof Spinner> = {
	title: "Components/Spinner",
	component: Spinner,
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
Компонент индикатора загрузки (лоадера) с анимацией. Использует SVG для плавного вращения.

## Props

Компонент не принимает пропсов (является "чистым" presentational компонентом).
        `,
			},
		},
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
	args: {},
}
