import { IUserRouter } from '@contorollers/adapters/routers/IUserRouter';
import { IUserUsecase } from '@usecases/user/UserInteractor';
import {injectable, inject} from "tsyringe";


export interface UserController {
    get(req: IUserRouter): void;
    post(req: IUserRouter): void;
    put(req: IUserRouter): void;
    delete(req: IUserRouter): void;
}

@injectable()
export class UserRestController implements UserController {
    constructor(@inject("IUserUsecase") private userUsecase: IUserUsecase) {
        this.userUsecase = userUsecase;
    }

    /**
     *
     *
     * @memberof UserRestController
     */
    public get(): void {
        this.userUsecase.getAllUsers();
    }

    /**
     *
     *
     * @param {IUserRouter} req
     * @memberof UserRestController
     */
    public post(req: IUserRouter): void {
        const { name, email } = req.body;
        this.userUsecase.createNewUser(name, email);
    }


    /**
     *
     *
     * @param {IUserRouter} req
     * @memberof UserRestController
     */
    public put(req: IUserRouter): void {
        const { id, name, email } = req.body;

        if (!id) throw new Error('idがありません')

        this.userUsecase.updateUser(id, name, email);
    }

    /**
     *
     *
     * @param {IUserRouter} req
     * @memberof UserRestController
     */
    public delete(req: IUserRouter): void {
        const id = Number(req.params.id);

        if (!id) throw new Error('idがありません')

        this.userUsecase.destroyUser(id);
    }
}
