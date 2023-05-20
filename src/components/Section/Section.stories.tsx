import { Section } from "./Section";
import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/Global.sass'

const meta = {
  title: 'Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    text: {
      type: 'string',
      description: 'some text'
    }
  }
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof Section>


export const Default: Story = {
  args: {
    text: '123'
  }
}