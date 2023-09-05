import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Input from '../Input.vue';

describe('Input', () => {
  it('should mounts properly', () => {
    const wrapper = mount(Input);

    expect(wrapper).toBeTruthy();
  });
});
