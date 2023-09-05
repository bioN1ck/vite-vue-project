import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import MovieSearch from '../MovieSearch.vue';

import * as api from '../../api/movies';
import { MOVIE_RESPONSE } from './mocks';
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
    vi.spyOn(api, 'moviesApi').mockImplementation(() => Promise.resolve(MOVIE_RESPONSE));
    const wrapper = mount(MovieSearch);
    const state = useMoviesStore();

    expect(state.movies).toEqual([]);
    await wrapper.find('input').setValue('home');
    await wrapper.find('button').trigger('click');
    expect(state.movies.length).toEqual(2);
  });
});
