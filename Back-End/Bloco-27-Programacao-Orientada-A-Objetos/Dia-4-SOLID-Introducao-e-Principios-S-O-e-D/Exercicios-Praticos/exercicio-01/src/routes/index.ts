import { Router } from 'express';
import PlantRoutes from './plantRoutes';
import PlantsRoute from './plantsRoute'
import sunnyRoute from './sunnyRoute';

const router = Router();

router.use('/plant', PlantRoutes);
router.use('/plants', PlantsRoute);
router.use('/sunny', sunnyRoute)

export default router;