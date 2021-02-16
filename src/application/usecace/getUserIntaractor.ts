import IUserRepository from "../adaper/repository/IUserRepository"
import IUserPresentator from "../adaper/presentator/IUserPresentator"
import { TYPES } from "../diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { UserData } from "../types";

@injectable()
export default class GetUserIntaractor {
    constructor(
        @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
    ) { }

    async handle(): Promise<UserData> {
        const user = await this._userRepository.getUser()
        return user.value

    }
}