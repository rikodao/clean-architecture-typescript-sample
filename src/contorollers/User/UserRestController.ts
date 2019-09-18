import { logger } from '@shared';
import { IUser } from 'src/entities/User/UserEntity';
import { Ripository } from 'src/repositories//Repository';
import { Request, Response, Router } from 'express';
import { IUserUsecase } from 'src/usecases/user/UserUsecase';
import { Contoroller } from 'src/contorollers/Contorollers';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';


export interface IUserController {
    userUsecase: IUserUsecase;
    get(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
    put(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}

export class UserRestController extends Contoroller implements IUserController {
    userUsecase: IUserUsecase;

    constructor(userUsecase: IUserUsecase) {
        super()
        this.userUsecase = userUsecase;
    }

    /**
     *
     */
    public get(req: Request, res: Response): void {
        try {
            const users = this.userUsecase.getAllUsers();
            res.status(OK).json(users);
        } catch (err) {
            logger.error(err.message, err);
            res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    /**
     *
     * @param user
     */
    public post(req: Request, res: Response): void {
        try {
            const { user } = req.body;
            const newUser: IUser = this.userUsecase.createNewUser(user)
            res.status(CREATED).json(newUser);
        } catch (err) {
            logger.error(err.message, err);
            res.status(BAD_REQUEST).json({
                error: err.message,
            });
        }
    }

    /**
     *
     * @param user
     */
    public put(req: Request, res: Response): void {
        // TODO
    }

    /**
     *
     * @param id
     */
    public delete(req: Request, res: Response): void {
        // TODO
    }
}
