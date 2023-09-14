import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import TopSection from '../TopSection.vue';
import Logo from '../Logo.vue';
import SearchButton from '../SearchButton.vue';
import Input from '../Input.vue';

describe('Top Section', () => {
  it('should mounts properly', () => {
    const wrapper = mount(TopSection);

    expect(wrapper).toBeTruthy();
  });

  it('should render logo and search button', () => {
    const wrapper = mount(TopSection);

    expect(wrapper.findComponent(Logo)).toBeTruthy();
    expect(wrapper.findComponent(SearchButton)).toBeTruthy();
  });

  it('should render slot', () => {
    const wrapper = mount(TopSection, {
      slots: Input,
    });

    expect(wrapper.findComponent(Input)).toBeTruthy();
  });

  it('should emit a value on pressing search button', async () => {
    const wrapper = mount(TopSection);

    await wrapper.findComponent(SearchButton).trigger('click');
    expect(wrapper.emitted().search[0][0]).toEqual(undefined);
  });
});
