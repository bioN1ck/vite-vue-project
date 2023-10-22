import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import SortPanel from '../SortPanel.vue';
import Switcher from '../Switcher.vue';

import { useMoviesStore } from '../../store/movies';
import { SORT_BY_BUTTONS } from '../../helpers/constants';

vi.mock('../../store/movies');

describe('Sort Panel', () => {
  it('should mounts properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(SortPanel);

    expect(wrapper).toBeTruthy();
  });

  it('should render total amount of movies', () => {
    const totalMovies = 568;
    vi.mocked(useMoviesStore).mockReturnValue({ total: totalMovies });
    const wrapper = mount(SortPanel);

    expect(wrapper.find('.sort-panel-counter span').text()).toBe(totalMovies.toString());
  });

  it('should render switcher component', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(SortPanel);

    const switcher = wrapper.findComponent(Switcher);
    expect(switcher).toBeTruthy();
  });

  it('should update movie list when trigger switcher', async () => {
    const setSortBy = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      sortBy: SORT_BY_BUTTONS[0],
      setSortBy,
    });
    const wrapper = mount(SortPanel);
    const buttons = wrapper.findAll('button');

    expect(buttons[0].text()).toEqual(SORT_BY_BUTTONS[0].label);

    await buttons[1].trigger('click');

    expect(setSortBy).toHaveBeenCalledOnce();
    expect(setSortBy).toHaveBeenCalledWith(SORT_BY_BUTTONS[1]);
  });
});
