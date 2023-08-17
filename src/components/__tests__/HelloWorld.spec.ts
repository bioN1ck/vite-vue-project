import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import HelloWorld from '../HelloWorld.vue';

describe('Hello World', () => {
  it('should mounts properly', () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper).toBeTruthy();
  });

  it('should display header text', () => {
    const msg = 'Hello Vue 3';
    const wrapper = mount(HelloWorld, { props: { msg }});

    expect(wrapper.find('h1').text()).toEqual(msg);
  });

  it('should increment a counter', async () => {
    const wrapper = mount(HelloWorld);
    const button = wrapper.find('button');

    expect(button.text()).toContain('count is 0');

    await button.trigger('click');

    expect(button.text()).toContain('count is 1');
  });
});
