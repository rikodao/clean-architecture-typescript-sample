import { Container } from "inversify";
import { TYPES } from "./types";
import UserMemoryRepository from "../repository/userMemoryRepository"
import IUserRepository from "../usecace/interface/repository/IUserRepository"
import UserJsonPresentator from "../presentator/userJsonPresentator"
import IUserPresentator from "../usecace/interface/presentator/IUserPresentator"
import IDBClient from "../usecace/interface/repository/IDBClient";
import MysqlClient from "../../infrastracture/database/mysqlClient";
import UserMySQLRepository from "../repository/userMySQLRepository";

const diContainer = new Container();
diContainer.bind<IUserRepository>(TYPES.User.Repository).to(UserMySQLRepository);
diContainer.bind<IUserPresentator>(TYPES.User.Presentator).to(UserJsonPresentator);
diContainer.bind<IDBClient>(TYPES.Db.DBClient).to(MysqlClient);

export default diContainer;