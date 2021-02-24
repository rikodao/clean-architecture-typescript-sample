import {testContainer} from '~/application/diContainer/inversify.config';
import {TYPES} from '~/application/diContainer/types';
import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import UserJsonController from '~/application/controllers/userJsonController';
import {Request, Response} from 'express';
const userRepository = testContainer.get<IUserRepository>(
  TYPES.User.Repository
);
const userPresentator = testContainer.get<IUserPresentator>(
  TYPES.User.Presentator
);

const userJsonController = new UserJsonController(
  userRepository,
  userPresentator
);

test('initialize UserJsonController', () => {
  expect(userJsonController).toBe(userJsonController);
});
test('getUser', async () => {
  const req: Request = {} as Request;
  const res: Response = {} as Response;
  const result = await userJsonController.getUser(req, res);
  expect(JSON.stringify(result)).toBe(JSON.stringify({name: 'hoge', age: 1}));
});
