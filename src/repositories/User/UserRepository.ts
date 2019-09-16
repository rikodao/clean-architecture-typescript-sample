import { IUser } from 'src/entities/User/UserEntity';
import { Ripository } from 'src/repositories//Repository';
import { IUserUsecase } from 'src/Usecases/User/UserUsecase';


export interface IUserRipository {
    userUsecase: IUserUsecase;
    getAll(): Promise<IUser[]>;
    create(user: IUser): Promise<IUser>;
    update(user: IUser): Promise<IUser>;
    delete(id: number): Promise<IUser>;
}

export class UserRipository extends Ripository implements IUserRipository {
     userUsecase: IUserUsecase;

    constructor(userUsecase: IUserUsecase) {
        super()
        this.userUsecase = userUsecase;
    }

    /**
     *
     */
    public async getAll(): Promise<IUser[]> { // コイツはどこが使うの?
        const allUsers : IUser[] = this.userUsecase.getAllUsers()
        let usersFromDB: IUser[] = [{}] as IUser[];
        //  usersFromDB = db.exexuteQuery("SELECT * FROM users;")  
        return usersFromDB;
    }

    /**
     *
     * @param user
     */
    public async create(user: IUser): Promise<IUser> { // コイツはどこが使うの?
        const newUser :IUser = this.userUsecase.createNewUser(user)
        let newUserFromDB: IUser = {} as IUser;
        //  usersFromDB = db.exexuteQuery("insert ${newUser} into users;")  
        return newUserFromDB;
    }

    /**
     *
     * @param user
     */
    public async update(user: IUser): Promise<IUser> {
        // TODO
        return {} as IUser;
    }

    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<IUser> {
        // TODO
        return {} as IUser;
    }
}
