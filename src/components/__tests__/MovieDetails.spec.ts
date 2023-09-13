import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import MovieDetails from '../MovieDetails.vue';

import { MOVIE } from './mocks';
import { useMoviesStore } from '../../store/movies';

vi.mock('../../store/movies');

describe('Movie Detail', () => {
  it('should mount properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movie: MOVIE,
      getMovieById: vi.fn(),
    });
    const wrapper = mount(MovieDetails, {
      props: {
        id: MOVIE.id.toString(),
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should fetch movie details', () => {
    const getMovieById = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      movie: MOVIE,
      loadingMovie: false,
      errorMovie: null,
      getMovieById,
    });
    mount(MovieDetails, {
      props: {
        id: MOVIE.id?.toString(),
      },
    });

    expect(getMovieById).toHaveBeenCalledOnce();
    expect(getMovieById).toHaveBeenCalledWith(MOVIE.id.toString());
  });

  it('should render movie details', () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movie: MOVIE,
      loadingMovie: false,
      errorMovie: null,
      getMovieById: vi.fn(),
    });
    const wrapper = mount(MovieDetails, {
      props: {
        id: MOVIE.id?.toString(),
      },
    });

    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.error').exists()).toBeFalsy();
    expect(wrapper.find('.movie-details').exists()).toBeTruthy();

    expect(wrapper.find('h2').text()).toEqual(MOVIE.movieName);
    expect(wrapper.find('.movie-details__description').text()).toEqual(MOVIE.description);
  });

  it('should render loading screen', async () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movie: null,
      loadingMovie: true,
      errorMovie: null,
      getMovieById: vi.fn(),
    });
    const wrapper = mount(MovieDetails, {
      props: {
        id: MOVIE.id?.toString(),
      },
    });

    expect(wrapper.find('.loading').exists()).toBeTruthy();
    expect(wrapper.find('.error').exists()).toBeFalsy();
    expect(wrapper.find('.movie-details').exists()).toBeFalsy();
  });

  it('should render error screen', async () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movie: null,
      loadingMovie: false,
      errorMovie: 'some error',
      getMovieById: vi.fn(),
    });
    const wrapper = mount(MovieDetails, {
      props: {
        id: MOVIE.id?.toString(),
      },
    });

    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.error').exists()).toBeTruthy();
    expect(wrapper.find('.movie-details').exists()).toBeFalsy();
  });
});
