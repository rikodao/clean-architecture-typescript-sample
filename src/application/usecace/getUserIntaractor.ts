import IUserRepository from "~/application/adaper/repository/IUserRepository"
import IUserPresentator from "~/application/adaper/presentator/IUserPresentator"
import { TYPES } from "~/application/diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { UserOutputData } from "~/application/types/user";

@injectable()
export default class GetUserIntaractor {
    constructor(
        @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
        @inject(TYPES.User.Presentator) private _userPresentator: IUserPresentator
    ) { }

    async handle(): Promise<UserOutputData> {
        const user = await this._userRepository.getUser()
        return this._userPresentator.serialize(user.value)

    }
}