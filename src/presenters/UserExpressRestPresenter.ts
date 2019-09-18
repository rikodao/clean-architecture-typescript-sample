import {IUserPresenter} from "../usecases/adapters/presenters/IUserPresenter";
import {IUser} from "@entities";
import {Response} from "express";

export class UserExpressRestPresenter implements IUserPresenter{
    private res: Response;
    
    constructor(res: Response) {
        this.res = res;
    }

    present(user: IUser): void {
        this.res.status(200).json(user);
    }
}