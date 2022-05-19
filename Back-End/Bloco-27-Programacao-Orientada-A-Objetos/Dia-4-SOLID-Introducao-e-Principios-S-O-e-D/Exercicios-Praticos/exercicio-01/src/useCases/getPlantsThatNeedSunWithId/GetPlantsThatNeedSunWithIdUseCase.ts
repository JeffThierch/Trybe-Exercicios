import { IPlant } from "../../../interfaces/IPlant";
import { Plant } from "../../entities/Plant";
import { IPlantsRepository } from "../../repositories/IPlantRepository";

export class GetPlantsThatNeedSunWithIdUseCase {
  constructor(
    private plantRepository: IPlantsRepository
  ) {};

  async execute(id: string): Promise<IPlant[]> {
    const plants = await this.plantRepository.getPlantsThatNeedsSunWithId(id)

    return plants
  }
}