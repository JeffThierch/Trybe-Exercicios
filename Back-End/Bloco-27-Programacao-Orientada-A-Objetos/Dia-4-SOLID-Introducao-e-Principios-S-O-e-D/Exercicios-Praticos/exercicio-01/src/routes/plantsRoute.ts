import { Router } from 'express';
import { getPlantsController } from '../useCases/getPlants';

const router = Router();

router
  .get('/', getPlantsController.handle);

export default router;