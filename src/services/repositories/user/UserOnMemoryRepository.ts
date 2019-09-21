import { IUserRepository } from "../../usecases/adapters/repositories/IUserRepository";
import { UserEntity } from "src/services/entities/User/UserEntity";

export class UserOnMemoryRepository implements IUserRepository {
    protected users: UserEntity[];
    constructor() {
        this.users = [
            { id: 1, name: 'one', email: 'one@mail.com' },
            { id: 2, name: 'two', email: 'two@mail.com' },
        ];
    }

    /**
     * メモリにユーザーを作成する
     *
     * @param {UserEntity} user
     * @returns {Promise<UserEntity>}
     * @memberof UserOnMemoryRepository
     */
    async create(user: UserEntity): Promise<void> {
        const newUser = { ...user, id: (this.users.length + 1), };
        this.users.push(newUser);
    }


    /**
     * メモリのユーザーをすべて取得する
     *
     * @returns {Promise<UserEntity[]>}
     * @memberof UserOnMemoryRepository
     */
    async getAll(): Promise<UserEntity[]> {
        return this.users;
    }

    /**
     * メモリのユーザーをすべて取得する
     *
     * @returns {Promise<UserEntity[]>}
     * @memberof UserOnMemoryRepository
     */
    async getUser(id: number): Promise<UserEntity> {
        return this.users.find(user => user.id === id) || {} as UserEntity;
    }

    async update(newUser: UserEntity): Promise<void> {
        const index: number = this.users.findIndex(user => user.id == newUser.id)
        this.users[index] = newUser;
    }

    /**
     * メモリから指定のユーザーを削除する
     *
     * @param {Number} id
     * @returns {Promise<UserEntity>}
     * @memberof UserOnMemoryRepository
     */
    async delete(id: Number): Promise<void> {
        const index: number = this.users.findIndex(user => user.id == id)
        const deletedUser = this.users.splice(index, 1)[0];
    }

}