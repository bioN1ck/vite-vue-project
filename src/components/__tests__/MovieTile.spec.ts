import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import MovieTile from '../MovieTile.vue';

import { MOVIE } from './mocks';

// TODO: move to the global scope
const MockIntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));
vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);

describe('Movie Tile', () => {
  it('should mounts properly', () => {
    const wrapper = mount(MovieTile, {
      props: {
        movie: MOVIE,
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render a tile', () => {
    const wrapper = mount(MovieTile, {
      props: {
        movie: MOVIE,
      },
    });

    expect(wrapper.find('h3').text()).toBe(MOVIE.movieName);
    expect(wrapper.find('.movie-tile__description span').text()).toBe(MOVIE.relevantGenres.join(', '));
    expect(wrapper.find('.movie-tile__description-year').text()).toBe(MOVIE.releaseYear);
  });
});
