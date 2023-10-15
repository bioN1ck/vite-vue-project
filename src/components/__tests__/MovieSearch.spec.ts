import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import MovieSearch from '../MovieSearch.vue';
import SearchInput from '../SearchInput.vue';
import Switcher from '../Switcher.vue';

import { useMoviesStore } from '../../store/movies';
import { SEARCH_BY_BUTTONS } from '../../helpers/constants.ts';
import Switcher from '../Switcher.vue';

vi.mock('../../store/movies');

describe('Movie Search', () => {
  it('should mounts properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({
      searchBy: SEARCH_BY_BUTTONS[0],
      searchQuery: '',
    });
    const wrapper = mount(MovieSearch);

    expect(wrapper).toBeTruthy();
  });


  it('should set searchBy param', async () => {
    const setSearchBy = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      searchQuery: '',
      searchBy: SEARCH_BY_BUTTONS[0],
      setSearchBy,
    });
    const wrapper = mount(MovieSearch);

    const buttons = wrapper.findComponent(Switcher).findAll('button');

    expect(buttons[0].text()).toEqual(SEARCH_BY_BUTTONS[0].label);
    expect(buttons[0].classes()).toContain('active');
    expect(buttons[1].classes('active')).toBeFalsy();

    await buttons[1].trigger('click');

    expect(setSearchBy).toHaveBeenCalledOnce();
    expect(setSearchBy).toHaveBeenCalledWith(SEARCH_BY_BUTTONS[1]);
    expect(buttons[1].classes()).toContain('active');
    expect(buttons[0].classes('active')).toBeFalsy();
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
