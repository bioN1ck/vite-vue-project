import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

import RadioButton from '../RadioButton.vue';

import { RADIO_BUTTONS } from './mocks';

describe('Radio Button', () => {
  it('should mounts properly', () => {
    const wrapper = mount(RadioButton, { props: { buttons: [] } });

    expect(wrapper).toBeTruthy();
  });

  it('should render labels', () => {
    const wrapper = mount(RadioButton, { props: { buttons: RADIO_BUTTONS } });

    const buttons = wrapper.findAll('button');
    expect(buttons[0].text()).toEqual(RADIO_BUTTONS[0].label);
    expect(buttons[1].text()).toEqual(RADIO_BUTTONS[1].label);
  });
});
