import IUserRepository from "~/application/adaper/repository/IUserRepository"
import IUserPresentator from "~/application/adaper/presentator/IUserPresentator"

import GetUserIntaractor from "~/application/usecace/getUserIntaractor"
import { TYPES } from "~/application/diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserJsonController {
    constructor(
        @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
        @inject(TYPES.User.Presentator) private _userPresentator: IUserPresentator
    ) { }
    async getUser(req: any, res: any): Promise<any> {
        const useCase = new GetUserIntaractor(this._userRepository, this._userPresentator)
        const result = await useCase.handle()
        return result
    }
};