import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';

import LazyImage from '../LazyImage.vue';

const observe = vi.fn();
const disconnect = vi.fn();
const MockIntersectionObserver = vi.fn(() => ({ observe, disconnect }));
vi.stubGlobal(`IntersectionObserver`, MockIntersectionObserver);

// const mockIntersectionObserver = class {
//   constructor(callback, options) {
//     this.viewPort = options.root
//     this.entries = []
//     this.viewPort.addEventListener('scroll', () => {
//       this.entries.map((entry) => {
//         entry.isIntersecting = this.isInViewPort(entry.target)
//       })
//       callback(this.entries, this)
//     })
//   }
//
//   isInViewPort(target) {
//     return true
//   }
//
//   observe(target) {
//     this.entries.push({ isIntersecting: true, target })
//   }
//
//   unobserve(target) {
//     this.entries = this.entries.filter((ob) => ob.target !== target)
//   }
//
//   disconnect() {
//     this.entries = []
//   }
// }
//
// vi.stubGlobal(`IntersectionObserver`, mockIntersectionObserver);

describe('Lazy Image', () => {
  it('should mounts properly', () => {
    const src = 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg';
    const wrapper = mount(LazyImage, { props: { src } });

    expect(wrapper).toBeTruthy();
  });

  it('should intersect on mount', async () => {
    const src = 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg';
    const wrapper = mount(LazyImage, { props: { src } });

    expect(observe).toHaveBeenCalled();

    wrapper.unmount();

    expect(disconnect).toHaveBeenCalled();
  });
});
