import { Router } from 'express';
import UserController from "../controllers/User.controller";
import validateUser from '../middlewares/Users.middleware'

const userController = new UserController();

const router = Router();

router
  .get('/', userController.getAll)
  .post('/', validateUser, userController.create)
  .get('/:id', userController.getById)
  .put('/:id', validateUser, userController.update)
  .delete('/:id', userController.remove);

export default router;

