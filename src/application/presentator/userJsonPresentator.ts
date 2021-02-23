import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';
import {injectable} from 'inversify';
import 'reflect-metadata';
import {UserData, UserOutputData} from '~/application/types/user';

@injectable()
export default class UserJsonPresentator implements IUserPresentator {
  // TS のオーバーロードの書き方
  serialize(params: UserData): UserOutputData;
  serialize(params: UserData[]): UserOutputData[];
  serialize(params: any): any {
    if (params instanceof Array) {
      return params.map(this._serializeSingleUser);
    }
    return this._serializeSingleUser(params);
  }

  private _serializeSingleUser = (params: UserData): UserOutputData => {
    return {
      name: `${params.familyName} ${params.firstName}`,
      age: params.age,
    };
  };
}
