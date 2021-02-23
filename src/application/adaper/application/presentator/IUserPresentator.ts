import {UserData, UserOutputData} from '../../../types/user';

export default interface IUserPresentator {
  serialize(params: UserData): UserOutputData;
  serialize(params: UserData[]): UserOutputData[];
}
