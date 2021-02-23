import User from '~/application/domain/entity/user/userEntity';
export default interface IUserRepository {
  getUser(): Promise<User>;
}
