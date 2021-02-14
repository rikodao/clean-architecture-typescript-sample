import IUserRepository from "../usecace/interface/repository/IUserRepository"
import UserJsonPresentator from "../presentator/userJsonPresentator"
import GetUserIntaractor from "../usecace/getUserIntaractor"
import { TYPES } from "../diContainer/types";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export default class UserJsonController {
    private _userRepository: IUserRepository
    constructor(
        @inject(TYPES.UserRepository) userRepository: IUserRepository
    ) {
        this._userRepository = userRepository
    }
    async getUser(req: any, res: any): Promise<any> {
        const useCase = new GetUserIntaractor(this._userRepository)
        const result = await useCase.handle()
        return new UserJsonPresentator(result).serialize()
    }
};