import { Router } from 'express';
import { createPlantController } from '../useCases/createPlant';
import { editPlantController } from '../useCases/editPlant';
import { getPlantByIdController } from '../useCases/getPlantsById';
import { removePlantByIdController } from '../useCases/removePlantById';

const router = Router();

router
  .post('/', createPlantController.handle)
  .get('/:id', getPlantByIdController.handle)
  .delete('/:id', removePlantByIdController.handle)
  .post('/:id', editPlantController.handle);

export default router;