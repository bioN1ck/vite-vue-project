import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import MovieDetails from '../MovieDetails.vue';

import { mapRawToMovie } from '../../helpers/functions';
import { MOVIE } from './mocks';

describe('Movie Detail', () => {
  it('should mount properly', () => {
    const wrapper = mount(MovieDetails, {
      props: {
        movie: mapRawToMovie(MOVIE),
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render movie details', () => {
    const wrapper = mount(MovieDetails, {
      props: {
        movie: mapRawToMovie(MOVIE),
      },
    });

    expect(wrapper.find('h2').text()).toEqual(MOVIE.title);
    expect(wrapper.find('.movie-details__description').text()).toEqual(MOVIE.overview);
  });
});
