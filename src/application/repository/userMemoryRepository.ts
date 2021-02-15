import User from "../domain/entity/user/userEntity";
import IUserRepository from "../usecace/interface/repository/IUserRepository";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserRepository implements IUserRepository {

    constructor() {
    }
    async getUser(): Promise<User> {
        const user = new User({ age: 18, first: "hoge", family: "fuga" })
        console.log("userRepository new 値", user);

        return user
    }

}