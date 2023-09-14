import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Logo from '../Logo.vue';

describe('Logo', () => {
  it('should mount', () => {
    const wrapper = mount(Logo);

    expect(wrapper).toBeTruthy();
  });

  it('should contain logo text', () => {
    const wrapper = mount(Logo);

    expect(wrapper.text()).toEqual('netflixroulette');
  });
});
