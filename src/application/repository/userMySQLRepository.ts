import User from "~/application/domain/entity/user/userEntity";
import IUserRepository from "~/application/adaper/application/repository/IUserRepository";
import { inject, injectable } from "inversify";
import "reflect-metadata";
import IDBClient from "~/application/adaper/infrastructure/IDBClient";
import { TYPES } from "~/application/diContainer/types";

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
    const user = new User({ age: 20, firstName: result[0].Tables_in_nomura_market.substr(0, 12), familyName: result[1].Tables_in_nomura_market.substr(0, 12) })
    return user
  }

}