import { Container } from "inversify";
import { TYPES } from "./types";
import UserMemoryRepository from "../repository/userMemoryRepository"
import IUserRepository from "../usecace/interface/repository/IUserRepository"

const diContainer = new Container();
diContainer.bind<IUserRepository>(TYPES.UserRepository).to(UserMemoryRepository);

export { diContainer };