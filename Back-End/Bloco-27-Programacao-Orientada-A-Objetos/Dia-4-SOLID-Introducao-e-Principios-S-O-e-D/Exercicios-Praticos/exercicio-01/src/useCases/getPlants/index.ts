import PlantRepository from "../../repositories/PlantRepository";
import { GetPlantsController } from "./GetPlantsController";
import { GetPlantsUseCase } from "./GetPlantsUseCase";

const plantRepository = new PlantRepository();
const getPlantsUseCase = new GetPlantsUseCase(plantRepository);
const getPlantsController = new GetPlantsController(getPlantsUseCase)

export {getPlantsController, getPlantsUseCase}