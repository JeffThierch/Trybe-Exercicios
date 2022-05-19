import { Router } from 'express';

const router = Router();

router
  .post('/')
  .get('/:id')
  .delete('/:id')
  .post('/:id');

export default router;