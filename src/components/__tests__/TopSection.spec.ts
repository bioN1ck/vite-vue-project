import { mount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TopSection from '../TopSection.vue';
import Logo from '../Logo.vue';
import SearchButton from '../SearchButton.vue';
import Input from '../Input.vue';

import { useMoviesStore } from '../../store/movies';

vi.mock('../../store/movies');

describe('Top Section', () => {
  it('should mounts properly', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    // TODO: to find out how to fix 'Failed to resolve component: router-link'
    const wrapper = mount(TopSection, {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render logo and search button', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(TopSection);

    expect(wrapper.findComponent(Logo)).toBeTruthy();
    expect(wrapper.findComponent(SearchButton)).toBeTruthy();
  });

  it('should render slot', () => {
    vi.mocked(useMoviesStore).mockReturnValue({});
    const wrapper = mount(TopSection, {
      slots: Input,
    });

    expect(wrapper.findComponent(Input)).toBeTruthy();
  });

  it('should navigate back to the main screen', async () => {
    const navigateTo = vi.fn();
    vi.mocked(useMoviesStore).mockReturnValue({
      navigateTo,
    });
    const wrapper = mount(TopSection, { stubs: { RouterLink: RouterLinkStub } });

    await wrapper.findComponent(SearchButton).trigger('click');
    expect(navigateTo).toHaveBeenCalledOnce();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});
