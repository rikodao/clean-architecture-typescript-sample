import IUserRepository from "../usecace/interface/repository/IUserRepository"
import IUserPresentator from "../usecace/interface/presentator/IUserPresentator"

import GetUserIntaractor from "../usecace/getUserIntaractor"
import { TYPES } from "../diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserJsonController {
    constructor(
        @inject(TYPES.User.Repository) private _userRepository: IUserRepository,
        @inject(TYPES.User.Presentator) private _userPresentator: IUserPresentator
    ) { }
    async getUser(req: any, res: any): Promise<any> {
        const useCase = new GetUserIntaractor(this._userRepository)
        const result = await useCase.handle()
        return this._userPresentator.serialize(result)
    }
};