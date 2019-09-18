import {IUser} from "@entities";

export interface IUserPresenter{
    present(user:IUser) : void
}