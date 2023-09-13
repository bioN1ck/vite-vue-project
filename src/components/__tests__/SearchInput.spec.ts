import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import SearchInput from '../SearchInput.vue';

import { useMoviesStore } from '../../store/movies';

vi.mock('../../store/movies');

describe('Search Input', () => {
  it('should mount properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(SearchInput);

    expect(wrapper).toBeTruthy();
  });

  it('should pass a query string into store', async () => {
    const setSearchQuery = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      searchQuery: '',
      setSearchQuery,
    });
    const wrapper = mount(SearchInput);

    const input = await wrapper.find('input');
    const button = await wrapper.find('button');

    expect(input.text()).toEqual('');

    await input.setValue('home');
    await button.trigger('click');

    expect(setSearchQuery).toHaveBeenCalledOnce();
    expect(setSearchQuery).toHaveBeenCalledWith('home');
  });
});
