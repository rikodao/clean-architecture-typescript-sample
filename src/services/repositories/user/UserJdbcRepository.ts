import { IUserRepository } from "../../usecases/adapters/repositories/IUserRepository";
import { UserEntity } from "src/services/entities/User/UserEntity";

export class UserJdbcRepository implements IUserRepository {
    constructor() {
    }

    /**
     * DBにユーザーを作成する
     *
     * @param {UserEntity} user
     * @returns {Promise<UserEntity>}
     * @memberof UserOnMemoryRepository
     */
    async create(user: UserEntity): Promise<void> {
        // insert into user (hoge, hoge@mail.com);
    }


    /**
     * DBのユーザーをすべて取得する
     *
     * @returns {Promise<UserEntity[]>}
     * @memberof UserOnMemoryRepository
     */
    async getAll(): Promise<UserEntity[]> {
        // select * from user 
        return {} as UserEntity[]
        
    }

    /**
     * DBのユーザーをすべて取得する
     *
     * @returns {Promise<UserEntity[]>}
     * @memberof UserOnMemoryRepository
     */
    async getUser(id: number): Promise<UserEntity> {
        // select * from user where id = 1;
        return {} as UserEntity

    }

    /**
     * DBの指定のユーザーを更新する
     *
     * @param {UserEntity} newUser
     * @returns {Promise<void>}
     * @memberof UserJdbcRepository
     */
    async update(newUser: UserEntity): Promise<void> {
        // UPDATE user SET name = 梁田 WHERE id = 1;
    }

    /**
     * DBの指定のユーザーを削除する
     *
     * @param {Number} id
     * @returns {Promise<UserEntity>}
     * @memberof UserOnMemoryRepository
     */
    async delete(id: Number): Promise<void> {
        // DELETE FROM user WHERE id="1";
    }

}


