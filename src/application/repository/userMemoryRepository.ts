import User from "../domain/entity/user/userEntity";
import { injectable } from "inversify";
import "reflect-metadata";

@injectable()
export default class userRepository {
    constructor() {
    }
    getUser(): User {
        const user = new User({ age: 18, first: "hoge", family: "fuga" })
        console.log("userRepository new 値", user);

        return user
    }

}