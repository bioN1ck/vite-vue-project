import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Input from '../Input.vue';

describe('Input', () => {
  it('should mounts properly', () => {
    const wrapper = mount(Input);

    expect(wrapper).toBeTruthy();
  });

  it('should emit change event when typing', async () => {
    const wrapper = mount(Input);

    const input = await wrapper.find('input');
    await input.setValue('hello world');

    const event = await wrapper.emitted('changeValue');
    expect(event).toBeTruthy();
    expect(event.length).toEqual(1);
    expect(event[0].length).toEqual(1);
    expect(event[0][0]).toEqual('hello world');
  });
});
