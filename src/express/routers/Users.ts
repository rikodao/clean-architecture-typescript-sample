import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import { UserEntity } from 'src/services/entities/User/UserEntity';
import express = require('express');
import { userListEvent } from '../../services/presenters/UserJsonEmitPresenter';
import { IUserRouter } from '../../services/contorollers/adapters/routers/IUserRouter';
import { userRestController } from '../../services/initialize';
const userController = userRestController;

// Init shared
const router = Router();

// const userOnMemoryRepository = new UserOnMemoryRepository();
// const userExpressRestPresenter = new UserJsonEmitPresenter()
// const userUsecase = new UserInteractor(userOnMemoryRepository, userExpressRestPresenter);




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
        userController.post(req as unknown as IUserRouter) // 型の付け方不明
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
        userController.put(req as unknown as IUserRouter) // 型の付け方不明
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
        userController.delete(req as unknown as IUserRouter) // 型の付け方不明
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
