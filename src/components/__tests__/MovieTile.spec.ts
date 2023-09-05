import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import MovieTile from '../MovieTile.vue';

import { MOVIE } from './mocks';
import { mapRawToMovie } from '../../helpers/functions';

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
        movie: mapRawToMovie(MOVIE),
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render a tile', () => {
    const wrapper = mount(MovieTile, {
      props: {
        movie: mapRawToMovie(MOVIE),
      },
    });

    expect(wrapper.find('h3').text()).toBe(MOVIE.title);
    expect(wrapper.find('.movie-tile__description span').text()).toBe(MOVIE.genres.join(', '));
    expect(wrapper.find('.movie-tile__description-year').text()).toBe(new Date(MOVIE.release_date).getFullYear().toString());
  });
});
