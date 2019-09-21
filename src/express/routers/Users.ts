import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import { UserRestController } from 'src/services/contorollers/User/UserRestController';
import { UserInteractor } from 'src/services/usecases/user/UserInteractor';
import { UserEntity } from 'src/services/entities/User/UserEntity';
import { UserOnMemoryRepository } from "../../services/repositories/user/UserOnMemoryRepository";
import express = require('express');
import { UserJsonEmitPresenter, userListEvent } from 'src/services/presenters/UserJsonEmitPresenter';
import { IUserRouter } from 'src/services/contorollers/adapters/routers/IUserRouter';

// Init shared
const router = Router();

const userOnMemoryRepository = new UserOnMemoryRepository();
const userExpressRestPresenter = new UserJsonEmitPresenter()
const userUsecase = new UserInteractor(userOnMemoryRepository, userExpressRestPresenter);
const userController = new UserRestController(userUsecase);

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', (req: express.Request, res: express.Response): void => {
    try {
        userController.get()
        userListEvent.once('userList', (data: UserEntity[]) => res.send(data))
    } catch (err) {
        logger.error(err.message, err);
        res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/


router.post('/create', (req: express.Request, res: express.Response): void => {
    try {
        userController.post(req as unknown as IUserRouter)
        userListEvent.once('user', (data: UserEntity) => res.send(data))
    } catch (err) {
        logger.error(err.message, err);
        res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

router.put('/update', async (req: Request, res: Response) => {
    try {
        userController.put(req as unknown as IUserRouter)
        userListEvent.once('user', (data: UserEntity) => res.send(data))
    } catch (err) {
        logger.error(err.message, err);
        res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        userController.delete(req as unknown as IUserRouter)
        userListEvent.once('user', (data: UserEntity) => res.send(data))
    } catch (err) {
        logger.error(err.message, err);
        res.status(BAD_REQUEST).json({
            error: err.message,
        });
    }
});

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
