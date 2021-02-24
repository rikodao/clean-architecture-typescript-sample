import {Container} from 'inversify';
import {TYPES} from './types';
import UserMemoryRepository from '~/application/repository/userMemoryRepository';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import UserJsonPresentator from '~/application/presentator/userJsonPresentator';
import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';
import IDBClient from '~/application/adaper/infrastructure/IDBClient';
import MysqlClient from '~/infrastracture/database/mysql/mysqlClient';
import UserMySQLRepository from '~/application/repository/userMySQLRepository';
import TestPresentator from '../presentator/testPresentator';

const diContainer = new Container();
diContainer
  .bind<IUserRepository>(TYPES.User.Repository)
  .to(UserMemoryRepository);
diContainer
  .bind<IUserPresentator>(TYPES.User.Presentator)
  .to(UserJsonPresentator);
// diContainer.bind<IDBClient>(TYPES.Db.DBClient).to(MysqlClient);

export default diContainer;

export const testContainer = new Container();
testContainer
  .bind<IUserRepository>(TYPES.User.Repository)
  .to(UserMemoryRepository);
testContainer
  .bind<IUserPresentator>(TYPES.User.Presentator)
  .to(TestPresentator);
