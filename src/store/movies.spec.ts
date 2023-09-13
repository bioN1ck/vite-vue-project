import { setActivePinia, createPinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useRoute, useRouter } from 'vue-router';

import { BASE_URL, useMoviesStore } from './movies';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants';
import { getMovie, getMovies } from '../api/api';
import { MOVIE, MOVIES } from '../components/__tests__/mocks';

vi.mock('vue-router');
vi.mock('../api/api');

describe('Movies Store', () => {
  let fetchMovieList;
  let fetchMovie;
  let routerPush;

  beforeEach(() => {
    setActivePinia(createPinia());
    vi.mocked(useRoute).mockReturnValue({ query: {} });

    routerPush = vi.fn();
    vi.mocked(useRouter).mockReturnValue({
      push: routerPush,
    });

    fetchMovieList = vi.fn();
    vi.mocked(getMovies).mockReturnValue({
      movieList: MOVIES,
      fetchMovieList,
    });

    fetchMovie = vi.fn();
    vi.mocked(getMovie).mockReturnValue({
      movie: null,
      fetchMovie,
    });
  });

  it('should fetch movie list by calling a method', async () => {
    const store = useMoviesStore();

    expect(store.movieList).toEqual(MOVIES);

    await store.getMovieList();

    expect(fetchMovieList).toHaveBeenCalledOnce();
  });

  it('should set new sortBy value and fetch movie list', async () => {
    const store = useMoviesStore();

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[0]);

    await store.setSortBy(SORT_BY_BUTTONS[1]);

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[1]);
    expect(fetchMovieList).toHaveBeenCalledOnce();
  });

  it('should set new searchBy value and fetch movie list', async () => {
    const store = useMoviesStore();

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[0]);
    await store.setSearchBy(SEARCH_BY_BUTTONS[1]);

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[1]);
    expect(fetchMovieList).toHaveBeenCalledOnce();
  });

  it('should set route query param value', async () => {
    const store = useMoviesStore();

    await store.setSearchQuery('home');

    expect(routerPush).toHaveBeenCalledOnce();
    expect(routerPush).toHaveBeenCalledWith({
      query: {
        search: 'home',
      },
    });
  });

  // TODO: to find out a way to test watcher
  // it('should fetch movie list when route query param have changed', async () => {
  //   const query = vi.fn();
  //   vi.mocked(useRoute).mockImplementation(() => ({ query }));
  //   // vi.mocked(useRoute).
  //   const store = useMoviesStore();
  //
  //   await store.setSearchQuery('home');
  //
  //   expect(query).toHaveBeenCalled();
  //   expect(routerPush).toHaveBeenCalledTimes(1);
  // });

  it('should fetch a movie details by movie ID', async () => {
    fetchMovie = vi.fn();
    vi.mocked(getMovie).mockReturnValue({
      movie: null,
      fetchMovie,
    });

    const store = useMoviesStore();
    const movieId = MOVIE.id;
    expect(store.movie).toEqual(null);

    await store.getMovieById(movieId);

    expect(fetchMovie).toHaveBeenCalledOnce();
    expect(fetchMovie).toHaveBeenCalledWith(`${BASE_URL}/${movieId}`);
  });
});
