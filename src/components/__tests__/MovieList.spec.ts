import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import MovieList from '../MovieList.vue';
import MovieTile from '../MovieTile.vue';

import { MOVIES } from './mocks';
import { useMoviesStore } from '../../store/movies';

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
vi.mock('../../store/movies');

describe('Movie List', () => {
  it('should mounts properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(MovieList);

    expect(wrapper).toBeTruthy();
  });

  it('should render 2 movie tiles', () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movieList: MOVIES,
      loadingMovieList: false,
      errorMovieList: null,
    });
    const wrapper = mount(MovieList);

    expect(wrapper.find('.movie-list').exists()).toBeTruthy();
    expect(wrapper.findAllComponents(MovieTile).length).toEqual(2);
    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.error').exists()).toBeFalsy();
  });

  it('should navigate to MovieDetails when click a Tile', async () => {
    const navigateTo = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      movieList: MOVIES,
      loadingMovieList: false,
      errorMovieList: null,
      navigateTo,
    });
    const wrapper = mount(MovieList);

    await wrapper.findAllComponents(MovieTile)[0].trigger('click');

    expect(navigateTo).toHaveBeenCalledOnce();
    expect(navigateTo).toHaveBeenCalledWith(`/${MOVIES[0].id}`);
  });

  it('should render loading screen', async () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movieList: [],
      loadingMovieList: true,
      errorMovieList: null,
    });
    const wrapper = mount(MovieList);

    expect(wrapper.find('.loading').exists()).toBeTruthy();
    expect(wrapper.find('.loading').text()).toEqual('Loading...');
    expect(wrapper.find('.error').exists()).toBeFalsy();
    expect(wrapper.find('.movie-list').exists()).toBeFalsy();
  });

  it('should render error screen', async () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      movieList: [],
      loadingMovieList: false,
      errorMovieList: 'some error',
    });
    const wrapper = mount(MovieList);

    expect(wrapper.find('.error').exists()).toBeTruthy();
    expect(wrapper.find('.error').text()).toEqual('Something went wrong...');
    expect(wrapper.find('.loading').exists()).toBeFalsy();
    expect(wrapper.find('.movie-list').exists()).toBeFalsy();
  });
});
