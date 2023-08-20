import type { Preview } from "@storybook/vue3";
import '../src/style.css';
import './styles-override.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'netflix-roulette-dark',
      values: [
        {
          name: 'netflix-roulette-dark',
          value: '#232323',
        },
        {
          name: 'netflix-roulette-light',
          value: '#ffffff',
        },
      ],
    },
  },
};

export default preview;
