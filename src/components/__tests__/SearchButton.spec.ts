import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import SearchButton from '../SearchButton.vue';

describe('Search Button', () => {
  it('should mounts properly', () => {
    const wrapper = mount(SearchButton);

    expect(wrapper).toBeTruthy();
  });

  it('should have a proper class', () => {
    const wrapper = mount(SearchButton);

    expect(wrapper.find('.search-btn')).toBeTruthy();
  });
});
