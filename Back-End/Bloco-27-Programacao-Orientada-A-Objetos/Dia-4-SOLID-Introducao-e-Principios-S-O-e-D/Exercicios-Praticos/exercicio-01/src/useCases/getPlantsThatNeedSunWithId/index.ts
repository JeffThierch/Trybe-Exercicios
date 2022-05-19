import PlantRepository from "../../repositories/PlantRepository";
import { GetPlantsThatNeedSunWithIdController } from "./GetPlantsThatNeedSunWithIdController.ts";
import { GetPlantsThatNeedSunWithIdUseCase } from "./GetPlantsThatNeedSunWithIdUseCase";

const plantRepository = new PlantRepository();
const getPlantsThatNeedSunWithIdUseCase = new GetPlantsThatNeedSunWithIdUseCase(plantRepository);
const getPlantsThatNeedSunWithIdController = new GetPlantsThatNeedSunWithIdController(getPlantsThatNeedSunWithIdUseCase)

export {getPlantsThatNeedSunWithIdUseCase, getPlantsThatNeedSunWithIdController}