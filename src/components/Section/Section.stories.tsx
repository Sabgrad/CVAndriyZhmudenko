import { Section } from "./Section";
import type { Meta, StoryObj } from '@storybook/react'
import '../../styles/Global.sass'

const meta = {
  title: 'Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
   
  }
} satisfies Meta<typeof Section>

export default meta

type Story = StoryObj<typeof Section>


export const Default: Story = {
  args: {
    
  }
}