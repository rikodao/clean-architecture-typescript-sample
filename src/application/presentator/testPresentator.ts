import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';
import {injectable} from 'inversify';
import 'reflect-metadata';
import {UserData, UserOutputData} from '~/application/types/user';

@injectable()
export default class UserJsonPresentator implements IUserPresentator {
  // TS のオーバーロードの書き方
  serialize(params: UserData): UserOutputData;
  serialize(params: UserData[]): UserOutputData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  serialize(params: any): any {
    if (params instanceof Array) {
      return [
        {
          name: 'hoge',
          age: 1,
        },
      ];
    }
    return {
      name: 'hoge',
      age: 1,
    };
  }
}
