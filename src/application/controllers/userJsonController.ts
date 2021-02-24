import IUserRepository from '~/application/adaper/application/repository/IUserRepository';
import IUserPresentator from '~/application/adaper/application/presentator/IUserPresentator';

import GetUserIntaractor from '~/application/usecace/getUserIntaractor';
import {TYPES} from '~/application/diContainer/types';
import {injectable, inject} from 'inversify';
import 'reflect-metadata';
import {UserOutputData} from '../types/user';

@injectable()
export default class UserJsonController {
  private useCase: GetUserIntaractor;
  constructor(
    @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
    @inject(TYPES.User.Presentator) private _userPresentator: IUserPresentator
  ) {
    this.useCase = new GetUserIntaractor(
      this._userRepository,
      this._userPresentator
    );
  }
  async getUser(req: any, res: any): Promise<UserOutputData> {
    const result = await this.useCase.handle();
    return result;
  }
}
