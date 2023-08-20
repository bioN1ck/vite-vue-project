import type { Meta, StoryObj } from '@storybook/vue3';

import AppInput from '../components/Input.vue';

const meta: Meta<typeof AppInput> = {
  title: 'Design System/Atoms/Input',
  component: AppInput,
  argTypes: {
    type: { control: 'select', options: ['text', 'number'] },
    value: { control: 'text' },
    placeholder: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithInitValue: Story = {
  args: {
    value: 'Init value',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Type something here',
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    value: 20,
  },
};
