import {IUser} from "@entities";

export interface IUserRepository {
    getAll(): Promise<IUser[]>;
    create(user: IUser): Promise<IUser>;
    update(user: IUser): Promise<IUser>;
    delete(id: number): Promise<IUser>;
}
