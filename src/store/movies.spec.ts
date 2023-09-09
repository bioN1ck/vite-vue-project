import { setActivePinia, createPinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import * as api from '../api/api';
import { useMoviesStore } from './movies';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants';

describe('Movies Store', () => {
  let fetchMovies;

  beforeEach(() => {
    setActivePinia(createPinia());
    fetchMovies = vi.fn();
    vi.spyOn(api, 'getMovies').mockImplementation(() => ({
      movies: [],
      total: 3000,
      fetchMovies,
    }));
  });

  it('should fetch movies', async () => {
    const store = useMoviesStore();

    await store.refreshMovies();
    expect(fetchMovies).toHaveBeenCalledOnce();
  });

  it('should set new sortBy value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[0]);

    await store.setSortBy(SORT_BY_BUTTONS[1]);

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[1]);
    expect(fetchMovies).toHaveBeenCalledOnce();
  });

  it('should set new searchBy value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[0]);
    await store.setSearchBy(SEARCH_BY_BUTTONS[1]);

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[1]);
    expect(fetchMovies).toHaveBeenCalledOnce();
  });

  it('should set new searchQuery value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.searchQuery).toEqual('');
    await store.setSearchQuery('home');

    expect(store.searchQuery).toEqual('home');
    expect(fetchMovies).toHaveBeenCalledOnce();
  });
});
