import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import MovieList from '../MovieList.vue';
import MovieTile from '../MovieTile.vue';

import { MOVIES } from './mocks';

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

describe('Movie List', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should mounts properly', () => {
    const wrapper = mount(MovieList);

    expect(wrapper).toBeTruthy();
  });

  it('should render 2 movie tiles', () => {
    const wrapper = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: MOVIES,
                total: 3000,
                isFetching: false,
                error: null,
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.find('.movie-list').exists()).toBeTruthy();
    expect(wrapper.findAllComponents(MovieTile).length).toEqual(2);
    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.error').exists()).toBeFalsy();
  });

  it('should emit a movie on Movie tile click', async () => {
    const wrapper = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: MOVIES,
                total: 3000,
                loading: false,
                error: null,
              },
            },
          }),
        ],
      },
    });

    await wrapper.findAllComponents(MovieTile)[0].trigger('click');
    expect((wrapper as unknown).emitted().select[0][0]).toEqual(MOVIES[0]);
  });

  it('should render loading screen', async () => {
    const wrapper = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: [],
                total: 0,
                loading: true,
                error: null,
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.find('.loading').exists()).toBeTruthy();
    expect(wrapper.find('.loading').text()).toEqual('Loading...');
    expect(wrapper.find('.error').exists()).toBeFalsy();
    expect(wrapper.find('.movie-list').exists()).toBeFalsy();
  });

  it('should render error screen', async () => {
    const wrapper = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: [],
                total: 0,
                loading: false,
                error: 'some error',
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.find('.error').exists()).toBeTruthy();
    expect(wrapper.find('.error').text()).toEqual('Something went wrong...');
    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.movie-list').exists()).toBeFalsy();
  });
});
