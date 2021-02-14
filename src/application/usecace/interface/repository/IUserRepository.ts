import User from "../../../domain/entity/user/userEntity";
export default interface IUserRepository {
    getUser(): User;
}
