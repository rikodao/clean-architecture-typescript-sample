import GetUserIntaractor from '~/application/usecace/getUserIntaractor';
import {testContainer} from '~/application/diContainer/inversify.config';
import {TYPES} from '~/application/diContainer/types';
import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
const userRepository = testContainer.get<IUserRepository>(
  TYPES.User.Repository
);
const userPresentator = testContainer.get<IUserPresentator>(
  TYPES.User.Presentator
);

const getUserIntaractor = new GetUserIntaractor(
  userRepository,
  userPresentator
);

test('initialize getUserIntaractor', () => {
  expect(getUserIntaractor).toBe(getUserIntaractor);
});
test('handle', async () => {
  const result = await getUserIntaractor.handle();
  expect(JSON.stringify(result)).toBe(JSON.stringify({name: 'hoge', age: 1}));
});
