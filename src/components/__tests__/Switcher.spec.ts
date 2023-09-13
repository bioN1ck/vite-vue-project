import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import Switcher from '../Switcher.vue';

import { RADIO_BUTTONS } from './mocks';

describe('Switcher', () => {
  it('should mounts properly', () => {
    const wrapper = mount(Switcher, {
      props: {
        label: 'Switch me',
        buttons: RADIO_BUTTONS,
      },
    });

    expect(wrapper).toBeTruthy();
  });

  it('should render label', () => {
    const label = 'Switch me';
    const wrapper = mount(Switcher, {
      props: {
        label,
        buttons: RADIO_BUTTONS,
      },
    });

    expect(wrapper.find('span').text()).toEqual(label);
  });

  it('should render buttons', () => {
    const wrapper = mount(Switcher, {
      props: {
        label: 'Switch me',
        buttons: RADIO_BUTTONS,
      },
    });

    const buttons = wrapper.findAll('button');
    expect(buttons[0].text()).toEqual(RADIO_BUTTONS[0].label);
    expect(buttons[1].text()).toEqual(RADIO_BUTTONS[1].label);
  });

  it('should switch buttons', async () => {
    const wrapper = mount(Switcher, {
      props: {
        label: 'Switch me',
        buttons: RADIO_BUTTONS,
      },
    });

    const buttons = wrapper.findAll('button');
    expect(buttons[0].classes('active')).toEqual(true);
    expect(buttons[1].classes('active')).toEqual(false);

    await buttons[1].trigger('click');

    expect(buttons[0].classes('active')).toEqual(false);
    expect(buttons[1].classes('active')).toEqual(true);
  });
});
