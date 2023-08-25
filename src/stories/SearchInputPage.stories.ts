import type { Meta, StoryObj } from '@storybook/vue3';

import SearchInputPage from './pages/SearchInputPage.vue';

const meta: Meta<typeof SearchInputPage> = {
  title: 'Design System/Views/Search Input',
  component: SearchInputPage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {};
