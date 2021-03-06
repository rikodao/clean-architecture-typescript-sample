import {Router, Request, Response} from 'express';
import UserController from '~/application/controllers/userJsonController';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import diContainer from '~/application/diContainer/inversify.config';
import {TYPES} from '~/application/diContainer/types';
import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';

const router = Router();

const UserRepository = diContainer.get<IUserRepository>(TYPES.User.Repository);
const UserPresentator = diContainer.get<IUserPresentator>(
  TYPES.User.Presentator
);
const userController = new UserController(UserRepository, UserPresentator);

router.use('/user', async (req: Request, res: Response) => {
  const user = await userController.getUser(req, res);
  res.json(user);
});

export default router;
