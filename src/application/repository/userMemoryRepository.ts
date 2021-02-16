import User from "~/application/domain/entity/user/userEntity";
import IUserRepository from "~/application/adaper/repository/IUserRepository";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserRepository implements IUserRepository {

    constructor() {
    }
    async getUser(): Promise<User> {
        const user = new User({ age: 18, firstName: "hoge", familyName: "fuga" })
        console.log("userRepository new 値", user);

        return user
    }

}