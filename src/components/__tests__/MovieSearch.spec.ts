import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

import MovieSearch from '../MovieSearch.vue';
import SearchInput from '../SearchInput.vue';
import Switcher from '../Switcher.vue';

import * as api from '../../api/api';
import { useMoviesStore } from '../../store/movies';
import { SEARCH_BY_BUTTONS } from '../../helpers/constants';

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

  it('should set a search query in store', async () => {
    const wrapper = mount(MovieSearch);

    const store = useMoviesStore();
    store.setSearchQuery = vi.fn();

    await wrapper.find('input').setValue('home');
    await wrapper.findComponent(SearchInput).find('button').trigger('click');

    expect(store.setSearchQuery).toHaveBeenCalled();
    expect(store.setSearchQuery).toHaveBeenCalledWith('home');
  });

  it('should set a searchBy mode in store', async () => {
    const wrapper = mount(MovieSearch);

    const store = useMoviesStore();
    store.setSearchBy = vi.fn();

    const button = await wrapper.findComponent(Switcher).findAll('button')[1];
    await button.trigger('click');

    expect(store.setSearchBy).toHaveBeenCalled();
    expect(store.setSearchBy).toHaveBeenCalledWith(SEARCH_BY_BUTTONS[1]);
  });
});
