import { IUser } from 'src/entities/User/UserEntity';
import { Ripository } from 'src/repositories//Repository';
import { IUserUsecase } from 'src/usecases/user/UserUsecase';


/**
 * jdbc実装に依存しても良いRepositoryの実装クラス
 */
export class UserJdbcRepository extends JdbcRepository implements IUserRipository {
    /**
     *
     */
    public async getAll(): Promise<IUser[]> { // コイツはどこが使うの?
        let usersFromDB: IUser[] = [{}] as IUser[];
        //  usersFromDB = db.exexuteQuery("SELECT * FROM users;")  
        return usersFromDB;
    }

    /**
     *
     * @param user
     */
    public async create(user: IUser): Promise<IUser> { // コイツはどこが使うの?
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
