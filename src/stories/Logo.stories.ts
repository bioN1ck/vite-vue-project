import type { Meta, StoryObj } from '@storybook/vue3';

import Logo from '../components/Logo.vue';

const meta: Meta<typeof Logo> = {
  title: 'Design System/Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};
