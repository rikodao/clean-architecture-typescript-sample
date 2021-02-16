import { Container } from "inversify";
import { TYPES } from "./types";
import UserMemoryRepository from "~/application/repository/userMemoryRepository"
import IUserRepository from "~/application/adaper/repository/IUserRepository"
import UserJsonPresentator from "~/application/presentator/userJsonPresentator"
import IUserPresentator from "~/application/adaper/presentator/IUserPresentator"
import IDBClient from "~/application/adaper/repository/IDBClient";
import MysqlClient from "~/infrastracture/database/mysql/mysqlClient";
import UserMySQLRepository from "~/application/repository/userMySQLRepository";

const diContainer = new Container();
diContainer.bind<IUserRepository>(TYPES.User.Repository).to(UserMySQLRepository);
diContainer.bind<IUserPresentator>(TYPES.User.Presentator).to(UserJsonPresentator);
diContainer.bind<IDBClient>(TYPES.Db.DBClient).to(MysqlClient);

export default diContainer;