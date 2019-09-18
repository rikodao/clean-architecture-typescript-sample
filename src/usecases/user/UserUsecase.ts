import { IUser } from 'src/entities/User/UserEntity';
import {IUserRepository} from "../adapters/repositories/IUserRepository";
import {IUserPresenter} from "../adapters/presenters/IUserPresenter";
export interface IUserUsecase  {
    getAllUsers() :void ;
    createNewUser(user:IUser): Promise<IUser>;
}
/**
 * 1. Controllerから呼び出されて、
 * 2. Repositoryなどを使ってEntityを操作して
 * 3. OuputPortに結果を出力する
 */
export class UserUsecase implements IUserUsecase {
    private userRepository:IUserRepository
    private outputPort: IUserPresenter;

    constructor(outputPort: IUserPresenter,userRepository:IUserRepository) {
        this.outputPort = outputPort;
        this.userRepository = userRepository;
    }

    async createNewUser(user: IUser): Promise<IUser> {
        let iUser = await this.userRepository.create(user);
        return iUser;
    }

    async getAllUsers(): void {
         let iUsers = await this.userRepository.getAll();
         this.outputPort.present(iUsers);
    }

}
