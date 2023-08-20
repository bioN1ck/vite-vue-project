import type { Meta, StoryObj } from '@storybook/vue3';

import MovieTile from '../components/MovieTile.vue';
import png from './assets/pulp-fiction.png';

const meta: Meta<typeof MovieTile> = {
  title: 'Design System/Views/Movie Tile',
  component: MovieTile,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    movie: {
      imageUrl: png,
      movieName: 'Pulp Fiction',
      description: `Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two
        hit men who are out to retrieve a suitcase stolen from their employer, mob
        boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take
        his wife Mia (Uma Thurman) out a few days later when Wallace himself will
        be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid
        by Wallace to lose his fight. The lives of these seemingly unrelated people
        are woven together comprising of a series of funny, bizarre and uncalled-for
        incidents.`,
      duration: 154,
      rating: 8.9,
      releaseYear: '1994',
      relevantGenres: ['Action & Adventure'],
    },
  },
};
