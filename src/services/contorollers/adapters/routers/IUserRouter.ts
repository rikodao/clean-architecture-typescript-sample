import { UserEntity } from "src/services/entities/User/UserEntity";

export interface IUserRouter {
    body: UserEntity;
    params: UserEntity;
    query: UserEntity
}
