import {UserEntity} from "src/services/entities/User/UserEntity";

export interface IUserPresenter{
    presentUser(user:UserEntity) : void
    presentUserList(user:UserEntity[]) : void
}