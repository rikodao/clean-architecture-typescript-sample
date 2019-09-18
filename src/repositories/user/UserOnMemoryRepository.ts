import {IUserRepository} from "../../usecases/adapters/repositories/IUserRepository";
import {IUser} from "@entities";

export class UserOnMemoryRepository implements IUserRepository{
    protected users : IUser[];
    constructor() {
        this.users = [];
    }

    async create(user: IUser): Promise<IUser> {
        this.users.push(user);
        return user;
    }

    async delete(id: number): Promise<IUser> {
        //TODO
    }

    async getAll(): Promise<IUser[]> {
        return undefined;
    }

    async update(user: IUser): Promise<IUser> {
        return undefined;
    }
}