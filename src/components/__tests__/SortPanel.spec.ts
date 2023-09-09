import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import SortPanel from '../SortPanel.vue';
import Switcher from '../Switcher.vue';

import * as api from '../../api/api';
import { useMoviesStore } from '../../store/movies';
import { SORT_BY_BUTTONS } from '../../helpers/constants';

describe('Sort Panel', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should mounts properly', () => {
    const wrapper = mount(SortPanel);

    expect(wrapper).toBeTruthy();
  });

  it('should render total amount of movies', () => {
    const totalMovies = 568;
    const wrapper = mount(SortPanel, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: [],
                total: totalMovies,
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.find('.sort-panel-counter span').text()).toBe(totalMovies.toString());
  });

  it('should render switcher component', () => {
    const wrapper = mount(SortPanel);

    const switcher = wrapper.findComponent(Switcher);
    expect(switcher).toBeTruthy();
  });

  it('should update movie list when trigger switcher', async () => {
    const fetchMovies = vi.fn();
    vi.spyOn(api, 'getMovies').mockImplementation(() => ({
      movies: [],
      total: 3000,
      fetchMovies,
    }));
    const wrapper = mount(SortPanel);
    const store = useMoviesStore();
    const buttons = wrapper.findAll('button');

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[0]);

    await buttons[1].trigger('click');

    expect(store.sortBy).toEqual(SORT_BY_BUTTONS[1]);
    expect(fetchMovies).toHaveBeenCalledOnce();
  });
});
