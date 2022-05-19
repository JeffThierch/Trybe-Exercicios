import { IPlant } from "../../../interfaces/IPlant";
import { Plant } from "../../entities/Plant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class GetPlantsUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(): Promise<IPlant[]> {
    const plants = this.plantRepository.getPlants()

    return plants
  }
}