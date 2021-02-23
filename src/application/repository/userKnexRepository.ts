import User from '~/application/domain/entity/user/userEntity';
import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import {injectable} from 'inversify';
import 'reflect-metadata';

import Knex from 'knex';
const config = {
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST_DEV,
    user: process.env.DB_USER_DEV,
    password: process.env.DB_PASSWORD_DEV,
    database: process.env.DB_NAME_DEV,
    timezone: 'utc',
  },
};
@injectable()
export default class UserKnexRepository implements IUserRepository {
  private connection: Knex<any, unknown[]>;
  constructor() {
    this.connection = Knex(config as Knex.Config);
  }
  async getUser(): Promise<User> {
    const talbe = 'user';
    const rowCount = 1;
    const result = await this.connection(talbe).limit(rowCount);

    console.log(result);
    const userData = result[0];
    userData.value;

    const user = new User({
      id: userData.id,
      age: userData.age,
      firstName: userData.first_name,
      familyName: userData.family_name,
    });
    return user;
  }
}
