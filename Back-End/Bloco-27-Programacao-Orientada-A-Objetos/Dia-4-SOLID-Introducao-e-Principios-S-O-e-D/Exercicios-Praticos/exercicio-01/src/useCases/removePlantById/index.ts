import { RemovePlantByIdController } from "./RemovePlantByIdController.ts";
import { RemovePlantByIdUseCase } from "./RemovePlantByIdUseCase";
import PlantRepository from "../../repositories/PlantRepository";

const plantRepository = new PlantRepository();
const removePlantByIdUseCase = new RemovePlantByIdUseCase(plantRepository);
const removePlantByIdController = new RemovePlantByIdController(removePlantByIdUseCase)

export {removePlantByIdController, removePlantByIdUseCase}