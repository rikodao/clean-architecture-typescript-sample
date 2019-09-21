import { UserEntity } from "@entities/User/UserEntity";

export interface IUserRouter {
    body: UserEntity;
    params: UserEntity;
    query: UserEntity
}
