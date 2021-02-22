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
    const query = "select * from user limit 1"
    const result = await this.connection.pool.query(query)

    console.log(result);
    const userData = result[0]

    const user = new User({ id: userData.id, age: userData.age, firstName: userData.first_name, familyName: userData.family_name })
    return user
  }

}