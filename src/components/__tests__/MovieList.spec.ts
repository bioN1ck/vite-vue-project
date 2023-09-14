import { mount } from '@vue/test-utils';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { createTestingPinia } from '@pinia/testing';

import MovieList from '../MovieList.vue';
import MovieTile from '../MovieTile.vue';

import { mapRawToMovie } from '../../helpers/functions';
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
                movies: MOVIES.map(mapRawToMovie),
                total: 3000,
              },
            },
          }),
        ],
      },
    });

    expect(wrapper.findAllComponents(MovieTile).length).toEqual(2);
  });

  it('should emit a movie on Movie tile click', async () => {
    const wrapper = mount(MovieList, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              movies: {
                movies: MOVIES.map(mapRawToMovie),
                total: 3000,
              },
            },
          }),
        ],
      },
    });

    await wrapper.findAllComponents(MovieTile)[0].trigger('click');
    expect((wrapper as unknown).emitted().select[0][0]).toEqual(mapRawToMovie(MOVIES[0]));
  });
});
