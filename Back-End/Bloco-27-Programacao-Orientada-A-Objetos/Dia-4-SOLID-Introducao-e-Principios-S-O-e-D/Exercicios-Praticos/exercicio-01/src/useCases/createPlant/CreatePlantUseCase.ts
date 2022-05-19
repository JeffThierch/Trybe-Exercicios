import { IPlant } from "../../../interfaces/IPlant";
import { Plant } from "../../entities/Plant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class CreatePlantUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(data: IPlant): Promise<IPlant> {
    const newPlant = new Plant(data)

    const savedPlant = this.plantRepository.savePlant(newPlant)

    return savedPlant
  }
}