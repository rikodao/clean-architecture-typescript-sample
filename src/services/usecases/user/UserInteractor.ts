import { UserEntity } from '../../entities/User/UserEntity';
import { IUserRepository } from "@usecases/adapters/repositories/IUserRepository";
import { IUserPresenter } from "@usecases//adapters/presenters/IUserPresenter";
import { injectable, inject } from "tsyringe";
export interface IUserUsecase {
    createNewUser(name: string, email: string): void;
    getAllUsers(): void;
    updateUser(id: number, name: string, email: string): void;
    destroyUser(id: Number): void;
}

/**
 * 1. Controllerから呼び出されて、
 * 2. Repositoryなどを使ってEntityを操作して
 * 3. OuputPortに結果を出力する
 */

@injectable()
export class UserInteractor implements IUserUsecase {
    constructor(
        @inject("IUserRepository") private readonly userRepository: IUserRepository,
        @inject("IUserPresenter") private readonly outputPort: IUserPresenter
    ) {
        this.userRepository = userRepository;
        this.outputPort = outputPort;
    }

    async createNewUser(name: string, email: string) {
        const newUser = new UserEntity(name, email)
        await this.userRepository.create(newUser).catch(err => {
            throw new Error("userRepository.create Exeption");
        });
        this.outputPort.presentUser(newUser);
    }

    async getAllUsers() {
        const users: UserEntity[] = await this.userRepository.getAll();
        this.outputPort.presentUserList(users);
    }

    async updateUser(id: number, name: string, email: string) {
        const updateUser = new UserEntity(name, name, id)
        await this.userRepository.update(updateUser);
        this.outputPort.presentUser(updateUser);

    }

    async destroyUser(id: number) {
        const deletedUser: UserEntity = await this._getUser(id);
        await this.userRepository.delete(id);

        this.outputPort.presentUser(deletedUser);
    }

    _getUser(id: number): Promise<UserEntity> {
        return this.userRepository.getUser(id).catch(err => {
            throw new Error("userRepository.getUser Exeption");
        });

    }

}
