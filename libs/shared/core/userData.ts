// eslint-disable-next-line import/no-extraneous-dependencies
import faker from '@faker-js/faker';
import { User } from '../models';

// eslint-disable-next-line import/prefer-default-export
export function newUserData(): User {
  const firstName = faker.name.firstName();
  const lastName = faker.name.firstName();
  return {
    name: `${firstName} ${lastName}`,
    first_name: firstName,
    last_name: lastName,
    phone: faker.phone.phoneNumber().split(' x')[0],
    email: faker.internet.email()
  };
}
