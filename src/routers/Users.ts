import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';
import { UserRestController } from 'src/contorollers/User/UserRestController';
import { UserUsecase } from 'src/usecases/user/UserUsecase';
import { UserEntity, IUser } from 'src/entities/User/UserEntity';
import {UserOnMemoryRepository} from "../repositories/user/UserOnMemoryRepository";
import {UserJdbcRepository} from "../repositories/user/UserJdbcRepository";

// Init shared
const router = Router();
const eserEntity = new UserEntity({} as IUser); // バケツリレーつらくね?

// const userRepository = new UserOnMemoryRepository();
const userRepository = new UserJdbcRepository();
const userUsecase = new UserUsecase(userRepository);
const userController = new UserRestController(userUsecase);

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', userController.get);

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/


router.post('/add',userController.post);

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     try {
//         const { user } = req.body;
//         if (!user) {
//             return res.status(BAD_REQUEST).json({
//                 error: paramMissingError,
//             });
//         }
//         user.id = Number(user.id);
//         await userRipository.update(user);
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params as ParamsDictionary;
//         await userRipository.delete(Number(id));
//         return res.status(OK).end();
//     } catch (err) {
//         logger.error(err.message, err);
//         return res.status(BAD_REQUEST).json({
//             error: err.message,
//         });
//     }
// });

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
