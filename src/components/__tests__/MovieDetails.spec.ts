import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import MovieDetails from '../MovieDetails.vue';

import { MOVIE } from './mocks';

describe('Movie Detail', () => {
  it('should mount properly', () => {
    const wrapper = mount(MovieDetails, {
      props: {
        movie: MOVIE,
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render movie details', () => {
    const wrapper = mount(MovieDetails, {
      props: {
        movie: MOVIE,
      },
    });

    expect(wrapper.find('h2').text()).toEqual(MOVIE.movieName);
    expect(wrapper.find('.movie-details__description').text()).toEqual(MOVIE.description);
  });
});
