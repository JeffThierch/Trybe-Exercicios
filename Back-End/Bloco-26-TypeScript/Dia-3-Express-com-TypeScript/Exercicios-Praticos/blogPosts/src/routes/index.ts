import PostsRouter from './PostsRoutes'
import { NextFunction, Request, Response, Router } from 'express'


const router = Router();

router.use('/posts', PostsRouter)
router.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  console.log(err.message)
})

export default router;