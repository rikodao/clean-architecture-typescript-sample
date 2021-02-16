import User from "../domain/entity/user/userEntity";
import IUserRepository from "../adaper/repository/IUserRepository";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import IDBClient from "../adaper/repository/IDBClient";
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
        const user = new User({ age: result.length, firstName: result[0].Tables_in_nomura_market.substr(0, 12), familyName: result[1].Tables_in_nomura_market.substr(0, 12) })
        return user
    }

}