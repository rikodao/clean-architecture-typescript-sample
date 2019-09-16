import { IUser } from 'src/entities/User/UserEntity';
import { Usecase } from 'src/Usecases/Usecase';

export interface IUserUsecase  {
     user: IUser;
     getAllUsers():IUser[];
     createNewUser(user:IUser): IUser;
}

export class UserUsecase extends Usecase implements IUserUsecase {
    user: IUser;
    constructor(user: IUser) {
        super(user)
        this.user = user;
    }

    getAllUsers():IUser[]{
        return [] as IUser[];
    }

    createNewUser(user:IUser): IUser{
        return  {} as IUser;
    }
}
