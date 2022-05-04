import PostsRouter from './PostsRoutes'
import { NextFunction, Request, Response, Router } from 'express'
import ErrorController from '../controllers/ErrorController';


const router = Router();

router.use('/posts', PostsRouter)
router.use(ErrorController)

export default router;