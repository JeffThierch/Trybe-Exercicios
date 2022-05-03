import { Router } from "express";
import PostsControllers from "../controllers/PostsControllers";

const postsControllers = new PostsControllers()

const router = Router();

router
  .get('/', postsControllers.getAll)
  .post('/', postsControllers.create)
  .get('/search', postsControllers.searchByQueryParams)
  .get('/:id', postsControllers.getById)
  .put('/:id', postsControllers.update)
  .delete('/:id', postsControllers.remove);

export default router;