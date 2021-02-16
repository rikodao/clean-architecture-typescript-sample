import { Container } from "inversify";
import { TYPES } from "./types";
import UserMemoryRepository from "../repository/userMemoryRepository"
import IUserRepository from "../adaper/repository/IUserRepository"
import UserJsonPresentator from "../presentator/userJsonPresentator"
import IUserPresentator from "../adaper/presentator/IUserPresentator"
import IDBClient from "../adaper/repository/IDBClient";
import MysqlClient from "../../infrastracture/database/mysql/mysqlClient";
import UserMySQLRepository from "../repository/userMySQLRepository";

const diContainer = new Container();
diContainer.bind<IUserRepository>(TYPES.User.Repository).to(UserMySQLRepository);
diContainer.bind<IUserPresentator>(TYPES.User.Presentator).to(UserJsonPresentator);
diContainer.bind<IDBClient>(TYPES.Db.DBClient).to(MysqlClient);

export default diContainer;