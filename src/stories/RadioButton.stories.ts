import type { Meta, StoryObj } from '@storybook/vue3';

import RadioButton from '../components/RadioButton.vue';

const meta: Meta<typeof RadioButton> = {
  title: 'Design System/Atoms/Radio Button',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labels: ['title', 'genre'],
    activeLabel: 'title',
  },
};
