import User from "../domain/entity/user/userEntity";
import IUserRepository from "../usecace/interface/repository/IUserRepository";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import IDBClient from "../usecace/interface/repository/IDBClient";
import { TYPES } from "../diContainer/types";

@injectable()
export default class UserMySQLRepository implements IUserRepository {
    private connection: any
    constructor(
        @inject(TYPES.Db.DBClient) connection: IDBClient
    ) {
        this.connection = connection
    }
    async getUser(): Promise<User> {
        const result = await this.connection.pool.query("show tables")
        const user = new User({ age: result.length, first: result[0].Tables_in_nomura_market.substr(0, 12), family: result[1].Tables_in_nomura_market.substr(0, 12) })
        return user
    }

}