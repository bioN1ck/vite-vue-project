import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonsPage from './pages/ButtonsPage.vue';

const meta: Meta<typeof ButtonsPage> = {
  title: 'Design System/Views/Buttons List',
  component: ButtonsPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {};
