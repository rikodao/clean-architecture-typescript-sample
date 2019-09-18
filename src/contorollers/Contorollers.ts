import { IUsecase } from 'src/usecases';
import { logger } from '@shared';
import { IUser } from 'src/entities/User/UserEntity';
import { Ripository } from 'src/repositories//Repository';
import { Request, Response, Router } from 'express';

export interface IContoroller  {
    get(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
    put(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}

export abstract class Contoroller {
    get?(req: Request, res: Response): void;
    post?(req: Request, res: Response): void;
    put?(req: Request, res: Response): void;
    delete?(req: Request, res: Response): void;
}
