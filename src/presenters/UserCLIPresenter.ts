import {IUserPresenter} from "../usecases/adapters/presenters/IUserPresenter";
import {IUser} from "@entities";
import {Response} from "express";

export class UserCLIPresenter implements IUserPresenter{
    private out: CommandOutput;
    
    constructor(out : CommandOutput) {
        this.out = out;
    }

    present(user: IUser): void {
        let s = JSON.stringify(user);
        out.output(s);
    }
}