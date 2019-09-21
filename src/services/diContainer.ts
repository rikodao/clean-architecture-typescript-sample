import 'reflect-metadata';
import { container } from 'tsyringe';
import { UserRestController } from './contorollers/User/UserRestController';
import { UserInteractor } from './usecases/user/UserInteractor';
import { UserOnMemoryRepository } from './repositories/user/UserOnMemoryRepository';
import { UserJsonEmitPresenter } from './presenters/UserJsonEmitPresenter';

container.register('IUserUsecase', { useClass: UserInteractor })
container.register('IUserRepository', { useClass: UserOnMemoryRepository })
container.register('IUserPresenter', { useClass: UserJsonEmitPresenter })

export const userRestController = container.resolve(UserRestController);