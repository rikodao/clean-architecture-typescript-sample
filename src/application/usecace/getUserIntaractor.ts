import IUserRepository from "../usecace/interface/repository/IUserRepository"
import IUserPresentator from "../usecace/interface/presentator/IUserPresentator"
import { TYPES } from "../diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class GetUserIntaractor {
    constructor(
        @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
    ) { }

    handle(): { id: string, name: string, age: number } {
        const user = this._userRepository.getUser()
        return user.value

    }
}