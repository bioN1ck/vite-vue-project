import type { Meta, StoryObj } from '@storybook/vue3';

import AppButton from '../components/Button.vue';

const meta: Meta<typeof AppButton> = {
  title: 'Design System/Atoms/Button',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['primary', 'secondary', 'blurred'] },
    size: { control: 'select', options: ['small', 'large'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
  args: { label: 'click me' },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    theme: 'secondary',
  },
};

export const Blurred: Story = {
  args: {
    theme: 'blurred',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
