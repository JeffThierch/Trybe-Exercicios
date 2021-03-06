import PlantRepository from "../../repositories/PlantRepository";
import { CreatePlantUseCase } from "./CreatePlantUseCase";
import { CreatePlantController } from "./CreatePlantController";

const plantRepository = new PlantRepository();
const createPlantUseCase = new CreatePlantUseCase(plantRepository);
const createPlantController = new CreatePlantController(createPlantUseCase)

export {createPlantController, createPlantUseCase}