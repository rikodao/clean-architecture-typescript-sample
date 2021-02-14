
import { Router, Request, Response } from 'express';
import UserController from '../../application/controllers/userJsonController';
import UserMemoryRepository from '../../application/repository/userMemoryRepository';

const router = Router();

const userController = new UserController(new UserMemoryRepository())

router.use('/user', async (req: Request, res: Response) => {
    const user = await userController.getUser(req, res)
    res.json(user)
});

export default router;