import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Button from '../Button.vue';

describe('Button', () => {
  it('should mounts properly', () => {
    const wrapper = mount(Button);

    expect(wrapper).toBeTruthy();
  });

  it('should display button label', () => {
    const label = 'I am a button';
    const wrapper = mount(Button, { props: { label } });

    expect(wrapper.text()).toEqual(label);
  });

  it('should render Small Primary button by default', () => {
    const wrapper = mount(Button);

    expect(wrapper.classes()).toContain('app-button--primary');
    expect(wrapper.classes()).toContain('app-button--small');
  });

  it('should render Large button', () => {
    const size = 'large';
    const wrapper = mount(Button, { props: { size } });

    expect(wrapper.classes()).toContain('app-button--large');
  });

  it('should render Secondary button', () => {
    const theme = 'secondary';
    const wrapper = mount(Button, { props: { theme } });

    expect(wrapper.classes()).toContain('app-button--secondary');
  });

  it('should render Blurred button', () => {
    const theme = 'blurred';
    const wrapper = mount(Button, { props: { theme } });

    expect(wrapper.classes()).toContain('app-button--blurred');
  });
});
