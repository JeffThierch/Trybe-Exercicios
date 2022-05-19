import PlantRepository from "../../repositories/PlantRepository";
import { GetPlantsByIdController } from "./GetPlantByIdController.ts";
import { GetPlantsByIdUseCase } from "./GetPlantByIdUseCase";

const plantRepository = new PlantRepository();
const getPlantByIdUseCase = new GetPlantsByIdUseCase(plantRepository);
const getPlantByIdController = new GetPlantsByIdController(getPlantByIdUseCase)

export {getPlantByIdUseCase, getPlantByIdController}