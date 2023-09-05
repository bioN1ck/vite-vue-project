import { setActivePinia, createPinia } from 'pinia';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { useMoviesStore } from './movies';
import * as api from '../api/movies';
import { MovieResponse } from '../api/movies';
import { SEARCH_BY_BUTTONS, SORT_BY_BUTTONS } from '../helpers/constants';

const MOVIE_RESPONSE: MovieResponse = {
  data: [
    {
      id: 337167,
      title: 'Fifty Shades Freed',
      tagline: "Don't miss the climax",
      vote_average: 6.1,
      vote_count: 1195,
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview:
        'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      budget: 55000000,
      revenue: 136906000,
      genres: ['Drama', 'Romance'],
      runtime: 106,
    },
    {
      id: 269149,
      title: 'Zootopia',
      tagline: 'Welcome to the urban jungle.',
      vote_average: 7.7,
      vote_count: 6795,
      release_date: '2016-02-11',
      poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg',
      overview:
        "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
      budget: 150000000,
      revenue: 1023784195,
      genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
      runtime: 108,
    },
  ],
  totalAmount: 3000,
  offset: 0,
  limit: 2,
};

describe('Movies Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.spyOn(api, 'moviesApi').mockImplementation(() => Promise.resolve(MOVIE_RESPONSE));
  });

  it('should fetch movies', async () => {
    const store = useMoviesStore();

    await store.getMovies();
    expect(store.movies.length).toEqual(2);
    expect(store.total).toBe(3000);
  });

  it('should set new sortBy value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[0]);
    expect(store.movies.length).toEqual(0);
    await store.setSortBy(SORT_BY_BUTTONS[1]);

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[1]);
    expect(store.movies.length).toEqual(2);
  });

  it('should set new searchBy value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[0]);
    expect(store.movies.length).toEqual(0);
    await store.setSearchBy(SEARCH_BY_BUTTONS[1]);

    expect(store.searchBy).toEqual(SEARCH_BY_BUTTONS[1]);
    expect(store.movies.length).toEqual(2);
  });

  it('should set new searchQuery value and fetch movies', async () => {
    const store = useMoviesStore();

    expect(store.searchQuery).toEqual('');
    expect(store.movies.length).toEqual(0);
    await store.setSearchQuery('home');

    expect(store.searchQuery).toEqual('home');
    expect(store.movies.length).toEqual(2);
  });
});
