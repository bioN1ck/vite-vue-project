import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import MovieSearch from '../MovieSearch.vue';

import * as api from '../../api/api';
import { useMoviesStore } from '../../store/movies';

describe('Movie Search', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should mounts properly', () => {
    const wrapper = mount(MovieSearch);

    expect(wrapper).toBeTruthy();
  });

  it('should pass a query string into store', async () => {
    const fetchMovies = vi.fn();
    vi.spyOn(api, 'getMovies').mockImplementation(() => ({
      movies: [],
      total: 3000,
      fetchMovies,
    }));
    const wrapper = mount(MovieSearch);
    const state = useMoviesStore();

    expect(state.searchQuery).toEqual('');

    await wrapper.find('input').setValue('home');
    await wrapper.find('button').trigger('click');

    expect(state.searchQuery).toEqual('home');
    expect(fetchMovies).toHaveBeenCalledOnce();
  });
});
