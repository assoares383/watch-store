import { mount } from '@vue/test-utils';

import ProductCard from './ProductCard';

describe('ProductCard - unit', () => {
  it('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: {},
      },
    });

    expect(wrapper.vm).toBeDefined();

    // eslint-disable-next-line no-console
    console.log(wrapper.classes());
  });
});
