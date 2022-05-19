import { Router } from 'express';
import { getPlantsThatNeedSunWithIdController } from '../useCases/getPlantsThatNeedSunWithId';

const router = Router();

router
  .get('/:id', getPlantsThatNeedSunWithIdController.handle);

export default router;