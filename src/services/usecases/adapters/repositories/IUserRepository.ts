import { UserEntity } from "src/services/entities/User/UserEntity";

export interface IUserRepository {
    getAll(): Promise<UserEntity[]>;
    getUser(id: number): Promise<UserEntity>;
    create(user: UserEntity): Promise<void>;
    update(user: UserEntity): Promise<void>;
    delete(id: number): Promise<void>;
}
