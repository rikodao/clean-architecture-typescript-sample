import { Container } from "inversify";
import { TYPES } from "./types";
import UserMemoryRepository from "../repository/userMemoryRepository"
import IUserRepository from "../usecace/interface/repository/IUserRepository"
import UserJsonPresentator from "../presentator/userJsonPresentator"
import IUserPresentator from "../usecace/interface/presentator/IUserPresentator"

const diContainer = new Container();
diContainer.bind<IUserRepository>(TYPES.User.Repository).to(UserMemoryRepository);
diContainer.bind<IUserPresentator>(TYPES.User.Presentator).to(UserJsonPresentator);

export default diContainer;