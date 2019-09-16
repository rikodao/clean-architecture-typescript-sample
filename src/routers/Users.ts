import { logger } from '@shared';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { paramMissingError } from '@shared';
import { ParamsDictionary } from 'express-serve-static-core';
import { UserController } from 'src/contorollers/User/UserController';
import { UserUsecase } from 'src/Usecases/User/UserUsecase';
import { UserEntity, IUser } from 'src/entities/User/UserEntity';

// Init shared
const router = Router();
const eserEntity = new UserEntity({} as IUser); // バケツリレーつらくね?
const userUsecase = new UserUsecase(eserEntity);

const userController = new UserController(userUsecase);

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
