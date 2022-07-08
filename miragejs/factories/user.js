/*
 * f Github repository: https://github.com/Marak/Faker.js#readme
 */
import { faker } from '@faker-js/faker';

/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

import { randomNumber } from './utils';

export default {
  user: Factory.extend({
    name() {
      return faker.name.findName();
    },
    mobile() {
      return faker.phone.number();
    },
    afterCreate(user, server) {
      const messages = server.createList('message', randomNumber(10), { user });

      user.update({ messages });
    },
  }),
};
