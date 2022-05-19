import PlantRepository from "../../repositories/PlantRepository";
import { EditPlantController } from "./EditPlantController";
import { EditPlantUseCase } from "./EditPlantUseCase";

const plantRepository = new PlantRepository();
const editPlantUseCase = new EditPlantUseCase(plantRepository);
const editPlantController = new EditPlantController(editPlantUseCase)

export {editPlantController, editPlantUseCase}