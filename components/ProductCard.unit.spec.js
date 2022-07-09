import { mount } from '@vue/test-utils';

import ProductCard from './ProductCard';

import { makeServer } from '@/miragejs/server';

describe('ProductCard - unit', () => {
  let server;

  beforeEach(() => {
    server = makeServer({
      environment: 'test',
    });
  });

  afterEach(() => {
    server.shutdown();
  });

  it('should macth snapchot', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'saepe quae et',
          price: '$782.00',
        }),
      },
    });

    expect(wrapper.element).toMatchSnapchot();
  });

  it('should mount the component', () => {
    const wrapper = mount(ProductCard, {
      propsData: {
        product: server.create('product', {
          title: 'saepe quae et',
          price: '$782.00',
        }),
      },
    });

    expect(wrapper.vm).toBeDefined();
    expect(wrapper.text()).toContain('saepe quae et');
    expect(wrapper.text()).toContain('$782.00');
  });
});
