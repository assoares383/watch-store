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

  const mountProductCart = () => {
    const product = server.create('product', {
      title: 'nobis nostrum aut',
      price: '$868.00',
    });

    return {
      wrapper: mount(ProductCard, {
        propsData: {
          product,
        },
      }),
      product,
    };
  };

  it('should match snapshot', () => {
    const { wrapper } = mountProductCart();

    expect(wrapper.element).toMatchSnapshot();
  });

  it('should mount the component', () => {
    const { wrapper } = mountProductCart();

    expect(wrapper.text()).toContain('nobis nostrum aut');
    expect(wrapper.text()).toContain('$868.00');
  });

  it('should emit the event addToCart with product object when button gets clicked', async () => {
    const { wrapper, product } = mountProductCart();

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted().addToCart).toBeTruthy();
    expect(wrapper.emitted().addToCart.length).toBe(1);
    expect(wrapper.emitted().addToCart[0]).toEqual([{ product }]);
  });
});
