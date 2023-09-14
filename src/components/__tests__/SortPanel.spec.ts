import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import SortPanel from '../SortPanel.vue';
import Switcher from '../Switcher.vue';

import * as api from '../../api/movies';
import { MOVIE_RESPONSE } from './mocks';
import { useMoviesStore } from '../../store/movies';

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
    vi.spyOn(api, 'moviesApi').mockImplementation(() => Promise.resolve(MOVIE_RESPONSE));
    const wrapper = mount(SortPanel);
    const store = useMoviesStore();
    const buttons = wrapper.findAll('button');

    expect(store.movies.length).toEqual(0);

    await buttons[1].trigger('click');

    expect(store.movies.length).toEqual(2);
  });
});
